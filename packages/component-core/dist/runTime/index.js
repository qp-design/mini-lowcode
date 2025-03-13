class BrowserRuntimeVM {
    constructor() {
        this.iframe = null;
        this.iframe = document.createElement('iframe');
        this.iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
        this.iframe.style.display = 'none';
        document.documentElement.appendChild(this.iframe);
    }
    executeCode(code) {
        if (!this.iframe) {
            this.iframe = document.createElement('iframe');
            this.iframe.setAttribute('sandbox', 'allow-same-origin allow-scripts');
            this.iframe.style.display = 'none';
            document.documentElement.appendChild(this.iframe);
        }
        const sandbox = this.iframe.contentWindow;
        return sandbox.eval(`
      (() => {
        with (window.__INJECT_VARS__) { 
          return (${code})
        }
      })()
    `);
    }
    execute(code) {
        try {
            const value = this.executeCode(code);
            return { value, success: true };
        }
        catch (err) {
            return { success: false, error: err, value: null };
        }
    }
}
export const browserRuntimeVM = new BrowserRuntimeVM();
