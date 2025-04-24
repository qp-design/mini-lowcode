import { useEditor } from "@craftjs/core";
import {useState} from "react";

const Example = () => {
    const [sourceId, setSourceId] = useState();
    const [targetId, setTargetId] = useState();

    const {selectedNodeId, actions, query} = useEditor((state) => ({
        selectedNodeId: state.events.selected
    }));

    return selectedNodeId && (
        <div>
            <h2>Node selected: {selectedNodeId}</h2>
            <div>
                <input type="text" value={sourceId} placeholder="Source" disabled />
                <button onClick={() => selectedNodeId && setSourceId(selectedNodeId)}>Set selected Node as source</button>
            </div>
            <div>
                <input type="text" value={targetId} placeholder="Target" disabled />
                <button onClick={() => selectedNodeId && setTargetId(selectedNodeId)}>Set selected Node as target</button>
            </div>
            {
                sourceId && targetId ? (
                    <button onClick={() => {
                        try {
                            // .canDropInParent will throw an error message if the conditions failed
                            // query.canDropInParent(sourceId, targetId);
                            actions.move(sourceId, targetId);
                        } catch (e) {
                            console.error(e.message);
                        }
                    }}>Move Node</button>
                ) : null
            }
        </div>
    )
}

export default Example;
