import { IMapData } from "../../types"
import Cards from "../cards"

interface IProps {
    mapValue: IMapData
}
const List = (props: IProps) => {
    return (
        <>
            <Cards mapValue={props.mapValue} name="asd">
                <span>sdasd</span>
            </Cards>
        </>
    )
}

export default List