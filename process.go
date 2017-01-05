package main

// TODO: need more structural input and sophiscated normalization
import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	re "regexp"
	"strings"
)

type repo struct {
	Name     string `json:"name"`
	Link     string `json:"link"`
	Desc     string `json:"description"`
	Category string `json:"category"`
}

func main() {
	resp, _ := http.Get("https://raw.githubusercontent.com/vuejs/awesome-vue/master/README.md")
	buf, _ := ioutil.ReadAll(resp.Body)
	str := string(buf)
	parts := re.MustCompile("(?m)^### ?").Split(str, -1)

	bodyRe := re.MustCompile(`\[(?P<name>.*?)\]\((?P<link>[^)]*)\)(?P<desc>.*)`)
	repos := []repo{}

	for _, part := range parts {
		split := strings.Split(part, "\n")
		category := split[0]
		for _, line := range split[1:] {
			line = strings.TrimSpace(line)
			matches := bodyRe.FindStringSubmatch(line)
			if len(matches) == 0 {
				continue
			}
			repo := repo{}
			repo.Name = matches[1]
			repo.Category = category

			if len(matches) > 2 {
				repo.Link = matches[2]
			}
			if len(matches) > 3 {
				repo.Desc = matches[3]
			}
			repos = append(repos, repo)
		}
	}

	marshaled, _ := json.MarshalIndent(repos, "", "  ")
	fmt.Println(string(marshaled))
}
