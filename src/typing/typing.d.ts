import {BuiltinComponents} from 'vivio/dist/src/template/interface'
import {Emitter} from 'vivio/dist/src/core/interface'

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
            icon?: string
            size?: 'large' | 'small' | 'mini'
          },
          $emit: Emitter<{
            input: string
          }>
          $slots: {
            append: any[]
          }
        },
        elCard: {
          props: {
            header?: string
          },
          $slots: {
            header: any[]
          }
        },
        elSlider: {
          props: {
            min?: number
            max?: number
            disabled?: boolean
            step?: number
          }
        },
        elTag: {
          props: {
            type: string
          }
        }
        elPagination: {
          props: {
            small?: boolean
            pageSize?: number
            total?: number
            pageCount?: number
            currentPage: number
            layout?: string
            pageSizes?: number[]
          }
          $emit: Emitter<{
            sizeChange?: number
            'current-change'?: number
          }>
        }
    }
}
