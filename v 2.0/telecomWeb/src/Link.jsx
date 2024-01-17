import { EVENTS, BUTTONS } from "./utils/consts.js";

export function navigate(href) {
    window.history.pushState({}, '', href)
    //crear un evento personalizado para que el browser nos avise el cambio de ruta
    const navigationEvent = new Event(EVENTS.PUSHSTATE)
    window.dispatchEvent(navigationEvent)
}

export function Link({ target, to, ...props }) {
    const handleClick = () => {
        const isMainEvent = event.button === BUTTONS.primary // primary click
        const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey
        const isManageableEvent = target === undefined || target === '_self'

        if (isMainEvent && isManageableEvent && !isModifiedEvent) {
            navigate(to) // navegación con SPA
            window.scrollTo(0, 0)
        }
    }

    return <a onClick={handleClick} href={to} target={target} {...props} />
}