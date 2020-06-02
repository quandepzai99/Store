import { StyleSheet } from "react-native";

const screenResetPw = StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: "#ffffff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        borderRadius: 24,
        marginTop: -50,
        justifyContent: "center",
        alignItems: "center"
    },
    textReLogin: {
        fontSize: 17,
        fontWeight: "normal",
        fontStyle: "normal",
        lineHeight: 20,
        letterSpacing: 0,
        textAlign: "center",
        color: "#ffffff",
        justifyContent: "center"
    },
    viewBlock2: {
        marginLeft: 12,
        marginRight: 16,
        paddingBottom: 25,
        paddingTop: 25,
        borderRadius: 24,
        backgroundColor: "#ffffff",
        shadowColor: "rgba(22, 60, 132, 0.16)",
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 20,
        shadowOpacity: 1,
        marginTop: -50
    },
    textSuccessfullChanged: {
        marginTop: 20,
        color: "green",
        fontSize: 20,
        fontWeight: "bold",
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0,
        textAlign: "center"
    },
    boxReLogin: {
        marginTop: 25,
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingTop: 17,
        paddingBottom: 17,
        width: "100%",
        backgroundColor: "rgba(142,22,117,1)"
    },
    viewBlock2box1: {
        marginLeft: 16,
        marginRight: 16,
        marginTop: -5,
        borderRadius: 24,
        backgroundColor: "blue",
        shadowColor: "#ffffff",
        shadowRadius: 20,
        borderColor: "black",
        shadowOpacity: 1,
        flexDirection: "row"
    },
    textblock2box1: {
        zIndex :1,
        left: 32,
        marginRight : 190,
        textAlign: "left",
        backgroundColor: "white",
        fontSize: 15
    },
    viewBlock2box2: {
        marginLeft: 16,
        marginRight: 16,
        backgroundColor: "#ffffff",
        marginTop: -5,
        flexDirection: "row",
        borderColor : "grey",
        borderRadius: 0,
        borderWidth: 1
    },
    textblock2box2: {
        paddingRight: 2,
        marginLeft: 16,
        paddingTop: 0,
        textAlign: "left",
        backgroundColor: "white",
        fontSize: 15
    }
});

export default screenResetPw;
