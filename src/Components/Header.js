import { Image, View } from "react-native"
import imagePath from "../assets/imagePath"

const Header = () => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10
        }}>
            <Image source={imagePath?.logo} />
            <Image source={imagePath?.charm_menu} />

        </View>
    )
}
export default Header;