export default {
    install: (app, options) => {
        app.config.globalProperties.$confirm = (message, dialogOptions) => {
            app.config.globalProperties.$eventBus.emit('requestConfirm', { body: message, ...dialogOptions });
        }
    }
}
