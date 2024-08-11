import { extendTheme} from 'native-base'
import { baseFontSize } from 'native-base/lib/typescript/theme/tools'
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'

export const TEMAS = extendTheme ({
    colors:{
        gray:{
            400: '#8d8d99'
        },
        blue: {
            500: '#339CFF',
            800: '#0b3b60'
        },
        white: '#FFF',
        black: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
})