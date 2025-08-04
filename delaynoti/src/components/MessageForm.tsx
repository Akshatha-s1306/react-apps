import React, { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const MessageForm = () => {
    const [message, setMessage] = useState<string>("");
    const [delay, setDelay] = useState<number>(10);
    const [isSending, setIsSending] = useState<boolean>(false);
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [sentMessage, setSentMessage] = useState<string>("");

    const handleSend = () => {
        setIsSending(true);
        const id = setTimeout(() => {
            setSentMessage(message);
            setMessage("");
            setDelay(10);
            setIsSending(false);
        }, delay * 1000);
        setTimerId(id);
    };

    const handleCancel = () => {
        if (timerId) clearTimeout(timerId);
        setIsSending(false);
    };

    return (
        <div className='max-w-md mx-auto mt-20 p-6 border rounded-lg shadow-sm bg-white space-y-4'>
            <h2 className='text-2xl font-bold text-gray-800'>Dm Delay Button!!</h2>

            <Textarea
                placeholder='Enter your message here...'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />

            <Input
                type='number'
                placeholder='Delay in seconds'
                value={delay}
                onChange={(e) => setDelay(Number(e.target.value))}
                disabled={isSending}
            />

            {!isSending ? (
                <Button className='w-full py-2' onClick={handleSend}>
                    Send with delay Message
                </Button>
            ) : (
                <Button className='w-full py-2' variant="destructive" onClick={handleCancel}>
                    Cancel sending .....
                </Button>
            )}
            {sentMessage && (
                <div className='mt-4 text-green-600 bg-green-100 p-3'>
                    {sentMessage}
                </div>
            )}
        </div>
    );
};

export default MessageForm;
