

let copyNode = {}
export const getNode = () => {
    return copyNode
}

export const resetNode = () => {
    copyNode = {}
}

export const setNode = (node: Node): void => {
    copyNode = node
}