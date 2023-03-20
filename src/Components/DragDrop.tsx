import { FC, useState } from "react"
import { useDrop } from "react-dnd"
import { PictureList } from "../Data"
import { IPicture } from "../Interfaces"
import { Picture } from "./Picture"

export const DragDrop: FC = () => {

    const [board, setBoard] = useState<IPicture[]>([])

    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item: IPicture) => addImageToBoard(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))

    const addImageToBoard = (id: number) => {
        const pictureList = PictureList.filter((picture) => id === picture.id)
        setBoard((board) => [...board, pictureList[0]])
    }

    return (
        <>
            <div className="pictures">
                {PictureList.map((picture) => {
                    return <Picture key={picture.id} id={picture.id} url={picture.url} />
                })}
            </div>
            <div className="board" ref={drop} style={{ border: isOver ? "dashed" : "solid" }}>
                {board.map((picture) => {
                    return <Picture key={picture.id} id={picture.id} url={picture.url} />
                })}
            </div>
        </>
    )
}
