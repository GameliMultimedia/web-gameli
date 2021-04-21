import { Articlecard } from "./Articlecard"

export const Newsbar = () => {
return (
        <div className="w-9/12 h-screen">
            <div className="flex">
                <Articlecard />
                <Articlecard />
                <Articlecard />
            </div>
            <div className="flex">
                <Articlecard />
                <Articlecard />
                <Articlecard />
            </div>   
            <div className="flex">
                <Articlecard />
                <Articlecard />
                <Articlecard />
            </div>   
        </div>
    )
}
