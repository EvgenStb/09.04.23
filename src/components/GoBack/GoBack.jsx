import { GoBackButton } from "./GoBack.styled";

export const GoBack = ({path, children}) => {

    return (
        <GoBackButton to={path}>
            {children} 
        </GoBackButton>
    )
}