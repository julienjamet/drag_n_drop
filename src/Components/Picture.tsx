import { FC } from "react"
import { IPicture } from "../Interfaces"
import { useDrag } from "react-dnd"

const Picture: FC<IPicture> = (props) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: props.id },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }))

    return (
        <img
            ref={drag}
            src={props.url}
            key={props.id}
            width="100"
            height="100"
            style={{ borderRadius: isDragging ? "100%" : "0" }}
            alt="pic to drag"
        />
    );
}

export default Picture
