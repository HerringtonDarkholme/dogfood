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
        },
        elInput: {
          props: {
            type?: string
            value?: string | number
            placeholder?: string
          },
          $slots: {
            append: any[]
          }
        },
        elCard: {
          props: {
            header?: string
          }
        },
        elSlider: {
          props: {
            min?: number
            max?: number
            disabled?: boolean
            step?: number
          }
        }
    }
}
