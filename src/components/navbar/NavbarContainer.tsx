import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {StateType} from "../../redux/store";

let mapStateToProps = (state: StateType)=>{
    return {
        friends: state.sidebar.friends
    }
}

export const NavbarContainer = connect(mapStateToProps)(Navbar)