type Options = {
  type?: "success" | "danger" | "info";
  customButtons?: {
    label: string;
    onClick: () => void;
    color?: string;
    backgroundColor?: string;
  }[];
  top?: boolean;
};

type ToastProps = {
  options?: Options;
  message?: string;
};
type BtnProps = {
  className?: string;
  label: string;
  onClick: () => void;
  style?: { color?: string; backgroundColor?: string };
};
export class Toast {
  toast: HTMLElement;
  toastContainer: HTMLElement;
  toastCloseBtn: HTMLElement;
  toastParagraph: HTMLElement;

  private defaultOptions: Options;
  constructor(options: Options = {}) {
    this.close.bind(this);
    this.defaultOptions = {
      type: "info",
      top: false,
      ...options,
      customButtons: [],
    };
    this.toast = document.createElement("div");
    this.toastContainer = document.createElement("div");
    this.toastCloseBtn = this.createBtn({
      label: "close",
      onClick: () => this.close(),
    });
    this.toastParagraph = document.createElement("p");
    this.toastContainer.classList.add("t-toast-container");
    if (options.top) {
      this.toastContainer.classList.add("t-toast-top");
    }

    this.toast.classList.add("t-toast");

    document.body.appendChild(this.toastContainer);
    this.toastContainer.appendChild(this.toast);
    this.toast.appendChild(this.toastParagraph);
    this.toast.appendChild(this.toastCloseBtn);
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
  }
  error({ message, options = {} }: ToastProps) {
    options.type = "danger";
    this.render({ message, options });
  }
  success({ message, options = {} }: ToastProps) {
    options.type = "success";
    this.render({ message: message, options: options });
  }
  info({ message, options = {} }: ToastProps) {
    options.type = "info";
    this.render({ message: message, options: options });
  }
  private close() {
    this.toastContainer.setAttribute("arial-hidden", "true");

    this.toastContainer.classList.remove("t-toast-display");
  }
  private createBtn({ label, onClick, className = "", style = {} }: BtnProps) {
    const btn = document.createElement("button");
    btn.classList.add(`t-toast-btn`);
    className && btn.classList.add(className);
    style.backgroundColor &&
      (btn.style.backgroundColor = style.backgroundColor);
    style.color && (btn.style.color = style.color);

    btn.textContent = label;
    btn.addEventListener("click", onClick);
    return btn;
  }
  private render({ message, options }: ToastProps) {
    options = { ...this.defaultOptions, ...options };
    this.toastParagraph.textContent = message ?? "";
    const buttons = this.toast.querySelectorAll("button");
    buttons.forEach((btn) => {
      if (btn != this.toastCloseBtn) {
        this.toast.removeChild(btn);
      }
    });
    for (let p of options.customButtons ?? []) {
      this.toast.appendChild(
        this.createBtn({
          label: p.label,
          onClick: p.onClick,
          className: "t-toast-custom-btn",
          style: {
            color: p.color,
            backgroundColor: p.backgroundColor,
          },
        })
      );
    }
    this.toast.classList.value = `t-toast t-toast-${options.type}`;
    this.toastContainer.classList.add("t-toast-display");
    this.toastContainer.setAttribute("arial-hidden", "false");
  }
}

const css = `
  .t-toast-container {
    position: absolute;
    position: fixed;
    bottom: 30px;
    left: 30px;
    width: calc(100% - 60px);
    max-width: 400px;
    transform: translateX(-150%);
    transition: transform 1s;
    pointer-events: none;
  }

  .t-toast {
    pointer-events: all;
    background: #fff;
    padding: 10px 15px 0;
    border-left-style: solid;
    border-left-width: 5px;
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 20%);
  }

  .t-toast-display {
    transform: translateX(0);
  }

  .t-toast-info {
    border-left-color: #0dcaf0;
  }
  .t-toast-success {
    border-left-color: #2ecc40;
  }
  .t-toast-danger {
    border-left-color: #ff4136;
  }

  .t-toast-top {
    top: 30px !important;
  }
  .t-toast-bottom {
    bottom: 30px;
  }

  .t-toast-btn {
    background: #f0f0f0;
    padding: 5px 10px;
    border: 0;
    border-radius: 4px;
    font-family: "Source Sans Pro", sans-serif;
    font-size: 14px;
    display: inline-block;
    margin-right: 10px;
    margin-bottom: 10px;
    cursor: pointer;
  }
  .t-toast-custom-btn {
    background: #323232;
    color: #fff;
  }
  `;
export default new Toast();
