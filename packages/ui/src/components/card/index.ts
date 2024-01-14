import CardBase from "./CardBase";
import CardContent from "./CardContent";
import CardHeader from "./CardHeader";

const Card = Object.assign(CardBase, {
    Header: CardHeader,
    Content: CardContent
})

export { Card }