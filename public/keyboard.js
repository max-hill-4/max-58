const LAYOUT_DATA = [
  // Function row
  [
    { id: 'Escape', label: 'ESC', width: 1, type: 'accent', defaultExpanded: true },
    { id: 'F1', label: 'F1', width: 1, sub: '☀' },
    { id: 'F2', label: 'F2', width: 1, sub: '☀' },
    { id: 'F3', label: 'F3', width: 1, sub: '⌕' },
    { id: 'F4', label: 'F4', width: 1, sub: '✂' },
    { id: 'F5', label: 'F5', width: 1, sub: '‹' },
    { id: 'F6', label: 'F6', width: 1, sub: '☽' },
    { id: 'F7', label: 'F7', width: 1, sub: '⁙' },
    { id: 'F8', label: 'F8', width: 1, sub: 'Dlt' },
    { id: 'F9', label: 'F9', width: 1, sub: '∞' },
    { id: 'F10', label: 'F10', width: 1, sub: 'Ω' },
    { id: 'F11', label: 'F11', width: 1, sub: '⏸' },
    { id: 'F12', label: 'F12', width: 1, sub: '⏭' },
    { id: 'Macro1', label: '', width: 1, type: 'transparent', icon: '◐' },
    { id: 'Macro2', label: '', width: 1, type: 'transparent', icon: '◑' },
    { id: 'Macro3', label: '', width: 1, type: 'transparent', icon: '◒' },
    { id: 'Macro4', label: '', width: 1, type: 'transparent', icon: '◓' },
  ],
  // Number row
  [
    { id: 'Backquote', label: '`', sub: '~', width: 1 },
    { id: 'Digit1', label: '1', sub: '!', width: 1 },
    { id: 'Digit2', label: '2', sub: '@', width: 1 },
    { id: 'Digit3', label: '3', sub: '#', width: 1 },
    { id: 'Digit4', label: '4', sub: '$', width: 1 },
    { id: 'Digit5', label: '5', sub: '%', width: 1 },
    { id: 'Digit6', label: '6', sub: '^', width: 1 },
    { id: 'Digit7', label: '7', sub: '&', width: 1 },
    { id: 'Digit8', label: '8', sub: '*', width: 1 },
    { id: 'Digit9', label: '9', sub: '(', width: 1 },
    { id: 'Digit0', label: '0', sub: ')', width: 1 },
    { id: 'Minus', label: '-', sub: '_', width: 1 },
    { id: 'Equal', label: '=', sub: '+', width: 1 },
    { id: 'Backspace', label: '⌫', width: 2, type: 'accent' },
    { id: 'Macro5', label: '', width: 1, type: 'transparent', icon: '◔' },
    { id: 'Macro6', label: '', width: 1, type: 'transparent', icon: '◕' },
  ],
  // QWERTY row
  [
    { id: 'Tab', label: 'Tab', width: 1.5 },
    { id: 'KeyQ', label: 'Q', width: 1 },
    { id: 'KeyW', label: 'W', width: 1 },
    { id: 'KeyE', label: 'E', width: 1 },
    { id: 'KeyR', label: 'R', width: 1 },
    { id: 'KeyT', label: 'T', width: 1 },
    { id: 'KeyY', label: 'Y', width: 1 },
    { id: 'KeyU', label: 'U', width: 1 },
    { id: 'KeyI', label: 'I', width: 1 },
    { id: 'KeyO', label: 'O', width: 1 },
    { id: 'KeyP', label: 'P', width: 1 },
    { id: 'BracketLeft', label: '[', sub: '{', width: 1 },
    { id: 'BracketRight', label: ']', sub: '}', width: 1 },
    { id: 'Backslash', label: '\\', sub: '|', width: 1.5 },
    { id: 'Macro7', label: '', width: 1, type: 'transparent', icon: '◖' },
    { id: 'Macro8', label: '', width: 1, type: 'transparent', icon: '◗' },
  ],
  // ASDF row
  [
    { id: 'CapsLock', label: 'Caps', width: 1.75 },
    { id: 'KeyA', label: 'A', width: 1 },
    { id: 'KeyS', label: 'S', width: 1 },
    { id: 'KeyD', label: 'D', width: 1 },
    { id: 'KeyF', label: 'F', width: 1 },
    { id: 'KeyG', label: 'G', width: 1 },
    { id: 'KeyH', label: 'H', width: 1 },
    { id: 'KeyJ', label: 'J', width: 1 },
    { id: 'KeyK', label: 'K', width: 1 },
    { id: 'KeyL', label: 'L', width: 1 },
    { id: 'Semicolon', label: ';', sub: ':', width: 1 },
    { id: 'Quote', label: "'", sub: '"', width: 1 },
    { id: 'Enter', label: 'Enter', width: 2.25, type: 'accent' },
    { id: 'ArrowUp', label: '↑', width: 1 },
  ],
  // ZXCV row
  [
    { id: 'ShiftLeft', label: 'Shift', width: 2.25 },
    { id: 'KeyZ', label: 'Z', width: 1 },
    { id: 'KeyX', label: 'X', width: 1 },
    { id: 'KeyC', label: 'C', width: 1 },
    { id: 'KeyV', label: 'V', width: 1 },
    { id: 'KeyB', label: 'B', width: 1 },
    { id: 'KeyN', label: 'N', width: 1 },
    { id: 'KeyM', label: 'M', width: 1 },
    { id: 'Comma', label: ',', sub: '<', width: 1 },
    { id: 'Period', label: '.', sub: '>', width: 1 },
    { id: 'Slash', label: '/', sub: '?', width: 1 },
    { id: 'ShiftRight', label: 'Shift', width: 1.75 },
    { id: 'Fn', label: 'Fn', width: 1 },
    { id: 'ArrowLeft', label: '←', width: 1 },
    { id: 'ArrowDown', label: '↓', width: 1 },
    { id: 'ArrowRight', label: '→', width: 1 },
  ],
  // Bottom row
  [
    { id: 'CtrlLeft', label: 'Ctrl', width: 1.25 },
    { id: 'MetaLeft', label: 'Win', width: 1.25 },
    { id: 'AltLeft', label: 'Alt', width: 1.25 },
    { id: 'Space', label: '', width: 6.25, type: 'wide' },
    { id: 'AltRight', label: 'Alt', width: 1 },
    { id: 'CtrlRight', label: 'Ctrl', width: 1.25 },
  ],
];

class KeyboardBuilder {
  constructor(rootElement, data) {
    this.root = rootElement;
    this.data = data;
    this.BASE_UNIT = 38;
    this.GAP = 4;
  }

  build() {
    this.root.innerHTML = '';
    this.data.forEach((rowData, rowIndex) => {
      this.renderRow(rowData, rowIndex);
    });
  }

  renderRow(rowData, rowIndex) {
    const row = document.createElement('div');
    row.className = 'key-row';
    row.dataset.rowIndex = rowIndex;

    rowData.forEach((keyDef, colIndex) => {
      const key = this.renderKey(keyDef, rowIndex, colIndex);
      row.appendChild(key);
    });

    this.root.appendChild(row);
  }

  renderKey(keyDef, rowIndex, colIndex) {
    const wrapper = document.createElement('div');
    wrapper.className = 'key-wrapper';
    wrapper.dataset.key = keyDef.id;
    wrapper.dataset.type = keyDef.type || 'standard';
    wrapper.dataset.width = keyDef.width || 1;
    wrapper.dataset.rowIndex = rowIndex;
    wrapper.dataset.colIndex = colIndex;

    const unitWidth = (keyDef.width || 1) * this.BASE_UNIT - this.GAP;
    wrapper.style.width = `${unitWidth}px`;

    if (keyDef.defaultExpanded) {
      wrapper.dataset.expanded = 'true';
    }

    const isIcon = keyDef.type === 'transparent' && keyDef.icon;
    const content = isIcon
      ? `<span class="key-icon">${keyDef.icon}</span>`
      : `<span class="key-legend primary">${keyDef.label}</span>${keyDef.sub ? `<span class="key-legend secondary">${keyDef.sub}</span>` : ''}`;

    wrapper.innerHTML = `
      <div class="key-container">
        <div class="keycap">
          ${content}
        </div>
        <div class="switch-body">
          <div class="switch-stem"></div>
          <div class="switch-rail left"></div>
          <div class="switch-rail right"></div>
        </div>
        <div class="switch-base">
          <div class="pin left"></div>
          <div class="pin center"></div>
          <div class="pin right"></div>
        </div>
        <div class="key-glow"></div>
      </div>
    `;

    return wrapper;
  }
}

class InteractionController {
  constructor(rootElement, tooltipElement) {
    this.root = rootElement;
    this.tooltip = tooltipElement;
    this.tooltipName = tooltipElement.querySelector('.tooltip-key-name');
    this.tooltipSwitch = tooltipElement.querySelector('.tooltip-switch-type');
    this.init();
  }

  init() {
    this.root.addEventListener('click', (e) => this.onClick(e));
    this.root.addEventListener('mouseenter', (e) => this.onHover(e), true);
    this.root.addEventListener('mouseleave', (e) => this.onUnhover(e), true);
    document.addEventListener('keydown', (e) => this.onKeyDown(e));
    document.addEventListener('keyup', (e) => this.onKeyUp(e));
  }

  onClick(e) {
    const wrapper = e.target.closest('.key-wrapper');
    if (!wrapper) return;

    const isExpanded = wrapper.dataset.expanded === 'true';
    if (isExpanded) {
      delete wrapper.dataset.expanded;
    } else {
      wrapper.dataset.expanded = 'true';
    }
  }

  onHover(e) {
    const wrapper = e.target.closest('.key-wrapper');
    if (!wrapper) return;

    const keyName = wrapper.dataset.key;
    const switchType = document.documentElement.dataset.switch || 'linear';

    this.tooltipName.textContent = keyName;
    this.tooltipSwitch.textContent = switchType;
    this.tooltip.classList.add('visible');

    this.updateTooltipPosition(e);
    document.addEventListener('mousemove', this.updateTooltipPosition);
  }

  onUnhover(e) {
    const wrapper = e.target.closest('.key-wrapper');
    if (!wrapper) return;

    this.tooltip.classList.remove('visible');
    document.removeEventListener('mousemove', this.updateTooltipPosition);
  }

  updateTooltipPosition = (e) => {
    const x = e.clientX + 15;
    const y = e.clientY - 40;
    this.tooltip.style.left = `${x}px`;
    this.tooltip.style.top = `${y}px`;
  };

  onKeyDown(e) {
    const wrapper = document.querySelector(`.key-wrapper[data-key="${e.code}"]`);
    if (wrapper) {
      wrapper.classList.add('key-pressed');
      wrapper.style.transform = 'translateY(4px)';
      wrapper.style.transition = 'transform 60ms ease-out';
    }
  }

  onKeyUp(e) {
    const wrapper = document.querySelector(`.key-wrapper[data-key="${e.code}"]`);
    if (wrapper) {
      wrapper.classList.remove('key-pressed');
      wrapper.style.transform = '';
      wrapper.style.transition = '';
    }
  }
}

class SwitchController {
  constructor(selector) {
    this.selector = selector;
    this.init();
  }

  init() {
    this.selector.addEventListener('click', (e) => {
      if (!e.target.classList.contains('switch-btn')) return;

      this.selector.querySelectorAll('.switch-btn').forEach(btn => {
        btn.classList.remove('active');
      });
      e.target.classList.add('active');

      const switchType = e.target.dataset.switch;
      document.documentElement.dataset.switch = switchType;
    });
  }
}

class ExpandController {
  constructor(root, button) {
    this.root = root;
    this.button = button;
    this.isExpanded = false;
    this.init();
  }

  init() {
    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    const wrappers = [...this.root.querySelectorAll('.key-wrapper')];

    if (this.isExpanded) {
      this.collapseAll(wrappers);
    } else {
      this.expandAll(wrappers);
    }
  }

  expandAll(wrappers) {
    wrappers.forEach((wrapper) => {
      const row = parseInt(wrapper.dataset.rowIndex) || 0;
      const col = parseInt(wrapper.dataset.colIndex) || 0;
      const delay = (row * 40 + col * 15);
      
      wrapper.style.setProperty('--cascade-delay', `${delay}ms`);
      wrapper.classList.add('cascade-animating');
      wrapper.dataset.expanded = 'true';
    });

    setTimeout(() => {
      wrappers.forEach(w => w.classList.remove('cascade-animating'));
    }, 1600);

    this.isExpanded = true;
    this.button.textContent = 'Collapse All';
  }

  collapseAll(wrappers) {
    wrappers.forEach(wrapper => {
      delete wrapper.dataset.expanded;
    });
    this.isExpanded = false;
    this.button.textContent = 'Expand All';
  }
}

class RGBController {
  constructor(keyboardBody, button) {
    this.keyboardBody = keyboardBody;
    this.button = button;
    this.isOn = false;
    this.init();
  }

  init() {
    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    this.isOn = !this.isOn;
    this.keyboardBody.classList.toggle('rgb-on', this.isOn);

    if (this.isOn) {
      this.assignDelays();
    } else {
      this.clearDelays();
    }

    this.button.classList.toggle('active', this.isOn);
  }

  assignDelays() {
    const wrappers = this.keyboardBody.querySelectorAll('.key-wrapper');
    wrappers.forEach((wrapper) => {
      const row = parseInt(wrapper.dataset.rowIndex) || 0;
      const col = parseInt(wrapper.dataset.colIndex) || 0;
      const delay = (row * 60 + col * 18);
      wrapper.style.setProperty('--rgb-delay', `${delay}ms`);
    });
  }

  clearDelays() {
    const wrappers = this.keyboardBody.querySelectorAll('.key-wrapper');
    wrappers.forEach(wrapper => {
      wrapper.style.removeProperty('--rgb-delay');
    });
  }
}

function init() {
  const root = document.getElementById('keyboard-root');
  const keyboardBody = document.getElementById('keyboard-body');
  const tooltip = document.getElementById('key-tooltip');
  const switchSelector = document.getElementById('switch-selector');
  const expandBtn = document.getElementById('expand-all-btn');
  const rgbBtn = document.getElementById('rgb-toggle-btn');

  const builder = new KeyboardBuilder(root, LAYOUT_DATA);
  builder.build();

  const interaction = new InteractionController(root, tooltip);
  const switchController = new SwitchController(switchSelector);
  const expandController = new ExpandController(root, expandBtn);
  const rgbController = new RGBController(keyboardBody, rgbBtn);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
