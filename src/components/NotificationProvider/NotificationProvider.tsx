import {
    createContext,
    FunctionComponent,
    PropsWithChildren,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState
} from "react";
import {Alert, AlertTitle, Snackbar} from "@mui/material";

type Severity = 'success' | 'info' | 'warning' | 'error'
type Message =  {
    title?: ReactNode
    message?: ReactNode
    details?: ReactNode
}

type Notifications = {
    success: (message: string | Message) => void
    info: (message: string | Message) => void
    warning: (message: string | Message) => void
    error: (message: string | Message) => void
}
const notificationContext = createContext<Notifications>({
    success: () => undefined,
    info: () => undefined,
    warning: () => undefined,
    error: () => undefined,
})

export const NotificationProvider: FunctionComponent<PropsWithChildren<{}>> = (props) => {
    const [notification, setNotification] = useState<{
        message: Message,
        severity: Severity
    }>({
        message: {},
        severity: 'info',
    })
    const [open, setOpen] = useState(false)
    const handleMessage = useCallback((severity: Severity) =>
        (message: string | Message) => {
            switch (severity) {
                case 'success':
                    console.log(message)
                    break;
                case 'info':
                    console.info(message)
                    break;
                case 'warning':
                    console.warn(message)
                    break;
                case 'error':
                    console.error(message)
                    break;
            }
            setNotification({
                message: typeof message === 'string' ? {
                    title: undefined,
                    message,
                } : message,
                severity,
            })
            setOpen(true)
        }, [setNotification, setOpen])
    const notifications: Notifications = useMemo(() => ({
        success: handleMessage('success'),
        info: handleMessage('info'),
        warning: handleMessage('warning'),
        error: handleMessage('error'),
    }), [])

    const handleClose = (_: unknown, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    }

    return (
        <notificationContext.Provider value={notifications}>
            <Snackbar
                open={open}
                onClose={handleClose}
                autoHideDuration={50000}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Alert
                    onClose={handleClose}
                    severity={notification.severity}
                    sx={{maxWidth: 'sm'}}
                >
                    {notification.message.title && <AlertTitle>{notification.message.title}</AlertTitle>}
                    {notification.message.message}
                </Alert>
            </Snackbar>
            {props.children}
        </notificationContext.Provider>
    )
}

export const useNotifications = () => {
    return useContext(notificationContext)
}