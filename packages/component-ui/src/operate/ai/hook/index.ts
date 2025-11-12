import {useXAgent, useXChat} from "@ant-design/x";
import {useRef, useState} from "react";
import {XStream} from '@ant-design/x';

export const useAi = () => {
    const abort = useRef(() => void 0);
    const [loading, setLoading] = useState<boolean>(false);
    const conversation_id = useRef(null);
    // ==================== Runtime ====================
    const [agent] = useXAgent({
        request: async (info, callbacks) => {
            setLoading(true);
            const {messages, message} = info;
            const {onSuccess, onUpdate, onError} = callbacks;
            // current message
            // console.log('message', message);
            // history messages
            // console.log('messages', messages);

            let content: string = '';

            try {
                const user = JSON.parse(sessionStorage.getItem('user-info') || '{}');
                const proappEnvLayout = JSON.parse(sessionStorage.getItem('proappEnvLayout') || '{}');
                const controller = new AbortController();
                const stream = await fetch('/v1/chat-messages', {
                    method: "POST",
                    signal: controller.signal,
                    // 'Bearer app-D9ttILKXYsnBKYj0UaxgE9QP'
                    // `Bearer ${proappEnvLayout.proappRemark}`
                    headers: {
                        'Authorization': `Bearer ${proappEnvLayout.proappRemark}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "response_mode": "streaming",
                        "user": user.userName,
                        "query": message,
                        "conversation_id": conversation_id.current,
                        "inputs": {
                            "proappcode": proappEnvLayout.proappCode,
                            "channelcode": proappEnvLayout.channelCode,
                            "tenantcode": proappEnvLayout.tenantCode,
                            "ticketTokenid": sessionStorage.getItem('saas-token'),
                            "domain": location.origin,
                            "role": "自动选择",
                        }
                    })
                });
                abort.current = () => {
                    setLoading(false);
                    controller.abort();
                    // stream.controller.abort()
                };

                for await (const chunk of XStream({
                    readableStream: stream.body,
                })) {
                    try {
                        const result = JSON.parse(chunk.data);
                        conversation_id.current = result.conversation_id;
                        if (result.event === 'message') {
                            content += result.answer || '';
                            onUpdate(content);
                        }
                    } catch (err) {
                        console.error('Error parsing stream data:', err);
                    }

                }

                onSuccess(content);
                setLoading(false);
            } catch (error) {
                console.log(71, error)
                setLoading(false);
                // handle error
                // onError();
            }
        },
    });

    const {
        // use to send message
        onRequest,
        setMessages,
        // use to render messages
        messages,
    } = useXChat({agent});

    return {
        onRequest,
        messages,
        setMessages,
        agent,
        loading,
        abort,
        conversation_id
    }
}