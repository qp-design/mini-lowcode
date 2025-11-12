import {useXAgent, useXChat} from "@ant-design/x";
import OpenAI from "openai";
import {useMemo, useRef} from "react";


export const useAi = () => {
    const abort = useRef(() => void 0);
    const client = useMemo(() => {
        return new OpenAI({
            baseURL: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
            // baseURL: 'https://api.deepseek.com',
            apiKey: 'sk-59017a68b0a746aeb3de84f39863c1ca', // 阿里
            // apiKey: 'sk-c25ceff210ea4aaf8e8160f8f9152afb',
            dangerouslyAllowBrowser: true,
        });
    }, [])

    // ==================== Runtime ====================
    const [agent] = useXAgent({
        request: async (info, callbacks) => {
            const { messages, message, setMessages } = info;
            const { onSuccess, onUpdate, onError } = callbacks;

            // current message
            console.log('message', message);

            // history messages
            console.log('messages', messages);

            let content: string = '';

            try {
                const stream = await client.chat.completions.create({
                    model: 'qwen-plus',
                    // model: 'deepseek-chat',
                    // if chat context is needed, modify the array
                    messages: [{ role: 'user', content: message }],

                    // model: 'wanx-lite',
                    // input: {
                    //     "negative_prompt": "",
                    //     "prompt": "一只在笑的小狗"
                    // },
                    // parameters: {
                    //     "size": "1024*768",
                    //     "style": "<auto>",
                    //     "n": 1
                    // },
                    // stream mode
                    stream: true,
                });
                abort.current = () => {
                    stream.controller.abort()
                };
                // setTimeout(() => {
                //     console.log('终止')
                //     stream.controller.abort();
                // }, 10)

                for await (const chunk of stream) {
                    content += chunk.choices[0]?.delta?.content || '';

                    onUpdate(content);
                }

                onSuccess(content);
            } catch (error) {
                // handle error
                // onError();
            }
        },
    });

    const {
        // use to send message
        onRequest,
        // use to render messages
        messages,
    } = useXChat({ agent });

    return {
        onRequest,
        messages,
        agent,
        client,
        abort
    }
}