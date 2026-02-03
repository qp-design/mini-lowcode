import {useComponent} from "@brushes/simulate-component-mini";

export const BadgeComponent = () => {
    const {Badge, Cell, Avatar, User} = useComponent();

    return (
        <Cell.Group>
            <Badge value={8} top={7} right={7}>
                <Avatar icon={<User />} />
            </Badge>
        </Cell.Group>
    )
}
