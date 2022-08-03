import { IMapData } from "../../types"
import Cards from "../cards"

interface IProps {
    mapValue: IMapData
}
const List = (props: IProps) => {
    return (
        <>
            <Cards mapValue={props.mapValue} name="asd" >
            </Cards>
        </>
    )
}

export default List