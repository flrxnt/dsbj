import { describe, it, expect, beforeEach } from 'vitest';

function makeChart(): string {
  return `<div class="bj-chart">
    <div class="bj-chart__header">
      <h3 class="bj-chart__title">Ventes</h3>
      <span class="bj-chart__subtitle">2024</span>
    </div>
    <div class="bj-chart__body"></div>
    <div class="bj-chart__legend">
      <span class="bj-chart__legend-item">
        <span class="bj-chart__legend-dot" style="background:#009639"></span>
        Série 1
      </span>
    </div>
  </div>`;
}

function makeBarChart(opts: { horizontal?: boolean } = {}): string {
  const cls = opts.horizontal ? ' bj-chart-bar--horizontal' : '';
  return `<div class="bj-chart-bar${cls}" role="img" aria-label="Graphique barres">
    <div class="bj-chart-bar__col">
      <div class="bj-chart-bar__value">120</div>
      <div class="bj-chart-bar__bar-area">
        <div class="bj-chart-bar__bar" style="height: 60%"></div>
      </div>
      <div class="bj-chart-bar__label">Jan</div>
    </div>
    <div class="bj-chart-bar__col">
      <div class="bj-chart-bar__value">200</div>
      <div class="bj-chart-bar__bar-area">
        <div class="bj-chart-bar__bar" style="height: 100%"></div>
      </div>
      <div class="bj-chart-bar__label">Fév</div>
    </div>
  </div>`;
}

function makeLineChart(): string {
  return `<div class="bj-chart-line" role="img" aria-label="Graphique ligne">
    <svg viewBox="0 0 300 150">
      <line class="bj-chart-line__grid" x1="0" y1="75" x2="300" y2="75" />
      <polyline class="bj-chart-line__path" points="0,120 75,80 150,100 225,40 300,60" />
      <polygon class="bj-chart-line__area" points="0,120 75,80 150,100 225,40 300,60 300,150 0,150" />
      <circle class="bj-chart-line__dot" cx="0" cy="120" />
      <text class="bj-chart-line__axis" x="0" y="145">Jan</text>
    </svg>
  </div>`;
}

function makePieChart(opts: { donut?: boolean } = {}): string {
  const cls = opts.donut ? ' bj-chart-pie--donut' : '';
  return `<div class="bj-chart-pie${cls}" role="img" aria-label="Graphique camembert">
    <svg viewBox="0 0 200 200">
      <path class="bj-chart-pie__slice" d="M100,100 L100,20 A80,80 0 0,1 180,100 Z" fill="#009639" />
      <text class="bj-chart-pie__label" x="140" y="60">25%</text>
      ${opts.donut ? '<circle class="bj-chart-pie__center" cx="100" cy="100" r="50" /><text class="bj-chart-pie__center-text" x="100" y="100">Total</text>' : ''}
    </svg>
  </div>`;
}

describe('chart: generic container', () => {
  beforeEach(() => {
    document.body.innerHTML = makeChart();
  });

  it('should render the chart container', () => {
    expect(document.querySelector('.bj-chart')).toBeTruthy();
  });

  it('should render header with title and subtitle', () => {
    expect(document.querySelector('.bj-chart__header')).toBeTruthy();
    expect(document.querySelector('.bj-chart__title')!.textContent).toBe('Ventes');
    expect(document.querySelector('.bj-chart__subtitle')!.textContent).toBe('2024');
  });

  it('should render body', () => {
    expect(document.querySelector('.bj-chart__body')).toBeTruthy();
  });

  it('should render legend', () => {
    expect(document.querySelector('.bj-chart__legend')).toBeTruthy();
    expect(document.querySelector('.bj-chart__legend-item')).toBeTruthy();
    expect(document.querySelector('.bj-chart__legend-dot')).toBeTruthy();
  });
});

describe('chart-bar: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makeBarChart();
  });

  it('should render the bar chart', () => {
    expect(document.querySelector('.bj-chart-bar')).toBeTruthy();
  });

  it('should have role="img" and aria-label', () => {
    const el = document.querySelector('.bj-chart-bar')!;
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBeTruthy();
  });

  it('should render columns with value, bar-area, bar and label', () => {
    const cols = document.querySelectorAll('.bj-chart-bar__col');
    expect(cols.length).toBe(2);
    expect(document.querySelector('.bj-chart-bar__value')!.textContent).toBe('120');
    expect(document.querySelector('.bj-chart-bar__bar-area')).toBeTruthy();
    expect(document.querySelector('.bj-chart-bar__bar')).toBeTruthy();
    expect(document.querySelector('.bj-chart-bar__label')!.textContent).toBe('Jan');
  });
});

describe('chart-bar: horizontal', () => {
  beforeEach(() => {
    document.body.innerHTML = makeBarChart({ horizontal: true });
  });

  it('should have the horizontal modifier', () => {
    const el = document.querySelector('.bj-chart-bar')!;
    expect(el.classList.contains('bj-chart-bar--horizontal')).toBe(true);
  });
});

describe('chart-line: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makeLineChart();
  });

  it('should render the line chart', () => {
    expect(document.querySelector('.bj-chart-line')).toBeTruthy();
  });

  it('should have role="img" and aria-label', () => {
    const el = document.querySelector('.bj-chart-line')!;
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBeTruthy();
  });

  it('should render SVG elements', () => {
    expect(document.querySelector('.bj-chart-line__path')).toBeTruthy();
    expect(document.querySelector('.bj-chart-line__area')).toBeTruthy();
    expect(document.querySelector('.bj-chart-line__dot')).toBeTruthy();
    expect(document.querySelector('.bj-chart-line__grid')).toBeTruthy();
    expect(document.querySelector('.bj-chart-line__axis')).toBeTruthy();
  });
});

describe('chart-pie: structure', () => {
  beforeEach(() => {
    document.body.innerHTML = makePieChart();
  });

  it('should render the pie chart', () => {
    expect(document.querySelector('.bj-chart-pie')).toBeTruthy();
  });

  it('should have role="img" and aria-label', () => {
    const el = document.querySelector('.bj-chart-pie')!;
    expect(el.getAttribute('role')).toBe('img');
    expect(el.getAttribute('aria-label')).toBeTruthy();
  });

  it('should render slice and label', () => {
    expect(document.querySelector('.bj-chart-pie__slice')).toBeTruthy();
    expect(document.querySelector('.bj-chart-pie__label')).toBeTruthy();
  });
});

describe('chart-pie: donut variant', () => {
  beforeEach(() => {
    document.body.innerHTML = makePieChart({ donut: true });
  });

  it('should have the donut modifier', () => {
    const el = document.querySelector('.bj-chart-pie')!;
    expect(el.classList.contains('bj-chart-pie--donut')).toBe(true);
  });

  it('should render center elements', () => {
    expect(document.querySelector('.bj-chart-pie__center')).toBeTruthy();
    expect(document.querySelector('.bj-chart-pie__center-text')).toBeTruthy();
  });
});
