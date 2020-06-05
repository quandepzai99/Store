import React from "react";
import { ImageBackground, View} from 'react-native';
import images from "../../../Common/images"

export default function Header() {
    return(
        <ImageBackground source={images.HeaderBackground}
        style={{height: 224}}>

        </ImageBackground>

    )

}
