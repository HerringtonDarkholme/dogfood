import {BuiltinComponents} from 'vivio/dist/src/template/interface'

declare module "vivio/dist/src/template/interface" {
    interface BuiltinComponents {
        elCol: {
          props: {
            span?: number
            offset?: number
          }
        }
        elRow: {
          props: {
            gutter?: number
            type?: 'flex'
            justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
          }
        }
        elMenu: {
        }
        elMenuItem: {
          props: {
            index: string
          }
        }
    }
}
