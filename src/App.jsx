import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer, ReferenceLine
} from 'recharts';
import {
  Activity, Target, TrendingUp, Calendar, CheckCircle2
} from 'lucide-react';

const App = () => {
  const data = [
    { month: 'ต.ค.', year2567: 100, year2568: 100 },
    { month: 'พ.ย.', year2567: 0,   year2568: 100 },
    { month: 'ธ.ค.', year2567: 100, year2568: 100 },
    { month: 'ม.ค.', year2567: 100, year2568: 100 },
    { month: 'ก.พ.', year2567: 0,   year2568: 100 },
    { month: 'มี.ค.', year2567: 100, year2568: 100 },
    { month: 'เม.ย.', year2567: 100, year2568: 100 },
    { month: 'พ.ค.', year2567: 0,   year2568: 0 },
    { month: 'มิ.ย.', year2567: 0,   year2568: 100 },
    { month: 'ก.ค.', year2567: 0,   year2568: 50 },
    { month: 'ส.ค.', year2567: 0,   year2568: 0 },
    { month: 'ก.ย.', year2567: 75,  year2568: 100 },
  ];
  const dataDoorToCT = [
  { month: 'ต.ค.', fast: 12, total: 16, percent: 75 },
  { month: 'พ.ย.', fast: 3,  total: 8,  percent: 38 },
  { month: 'ธ.ค.', fast: 4,  total: 8,  percent: 50 },
  { month: 'ม.ค.', fast: 7,  total: 14, percent: 50 },
  { month: 'ก.พ.', fast: 8,  total: 14, percent: 57 },
  { month: 'มี.ค.', fast: 5,  total: 8,  percent: 63 },
  { month: 'เม.ย.', fast: 15, total: 20, percent: 75 },
  { month: 'พ.ค.', fast: 14, total: 22, percent: 64 },
  { month: 'มิ.ย.', fast: 10, total: 19, percent: 53 },
  { month: 'ก.ค.', fast: 7,  total: 10, percent: 70 },
  { month: 'ส.ค.', fast: 11, total: 23, percent: 48 },
  { month: 'ก.ย.', fast: 5,  total: 11, percent: 45 },
];

const dataCT40_2568 = [
  { month: 'ต.ค.', percent: 88.89 },
  { month: 'พ.ย.', percent: 0.00 },
  { month: 'ธ.ค.', percent: 50.00 },
  { month: 'ม.ค.', percent: 100.00 },
  { month: 'ก.พ.', percent: 50.00 },
  { month: 'มี.ค.', percent: 100.00 },
  { month: 'เม.ย.', percent: 69.23 },
  { month: 'พ.ค.', percent: 66.67 },
  { month: 'มิ.ย.', percent: 58.33 },
  { month: 'ก.ค.', percent: 83.33 },
  { month: 'ส.ค.', percent: 62.50 },
  { month: 'ก.ย.', percent: 80.00 },
];
const dataCT40_2567 = [
  { month: 'ต.ค.', percent: 20.00 },
  { month: 'พ.ย.', percent: 50.00 },
  { month: 'ธ.ค.', percent: 66.67 },
  { month: 'ม.ค.', percent: 100.00 },
  { month: 'ก.พ.', percent: 71.43 },
  { month: 'มี.ค.', percent: 71.43 },
  { month: 'เม.ย.', percent: 50.00 },
  { month: 'พ.ค.', percent: 63.64 },
  { month: 'มิ.ย.', percent: 0.00 },
  { month: 'ก.ค.', percent: 100.00 },
  { month: 'ส.ค.', percent: 0.00 },
  { month: 'ก.ย.', percent: 71.43 },
];
const dataLab45_2568 = [
  { month: 'ต.ค.', percent: 77.78 },
  { month: 'พ.ย.', percent: 100.00 },
  { month: 'ธ.ค.', percent: 75.00 },
  { month: 'ม.ค.', percent: 100.00 },
  { month: 'ก.พ.', percent: 100.00 },
  { month: 'มี.ค.', percent: 100.00 },
  { month: 'เม.ย.', percent: 84.62 },
  { month: 'พ.ค.', percent: 91.67 },
  { month: 'มิ.ย.', percent: 75.00 },
  { month: 'ก.ค.', percent: 100.00 },
  { month: 'ส.ค.', percent: 87.50 },
  { month: 'ก.ย.', percent: 80.00 },
];
const dataLab45_2567 = [
  { month: 'ต.ค.', percent: 40.00 },
  { month: 'พ.ย.', percent: 66.67 },
  { month: 'ธ.ค.', percent: 83.33 },
  { month: 'ม.ค.', percent: 100.00 },
  { month: 'ก.พ.', percent: 57.14 },
  { month: 'มี.ค.', percent: 71.43 },
  { month: 'เม.ย.', percent: 50.00 },
  { month: 'พ.ค.', percent: 72.73 },
  { month: 'มิ.ย.', percent: 100.00 },
  { month: 'ก.ค.', percent: 100.00 },
  { month: 'ส.ค.', percent: 0.00 },
  { month: 'ก.ย.', percent: 71.43 },
];



  const avg = (key) =>
    (data.reduce((s, d) => s + d[key], 0) / data.length).toFixed(1);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container">

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="dashboard-title">
            <Activity size={22} color="#dc2626" />
            เปรียบเทียบ KPI Stroke (rtPA ภายใน 60 นาที)
          </div>
          <div className="dashboard-subtitle">
            เปรียบเทียบผลการดำเนินงาน ปีงบประมาณ 2567 และ 2568
          </div>
        </div>

         {/* KPI #1 */}
        <div className="kpi-grid">
          <div className="kpi-card">
            <div className="kpi-label">
              <Target size={14} /> เกณฑ์เป้าหมาย
            </div>
            <div className="kpi-value">&gt; 60%</div>
          </div>

          <div className="kpi-card">
            <div className="kpi-label">
              <Calendar size={14} /> ปีงบประมาณ 2567
            </div>
            <div className="kpi-value">{avg('year2567')}%</div>
          </div>

          <div className="kpi-card highlight">
            <div className="kpi-label">
              <TrendingUp size={14} /> ปีงบประมาณ 2568 (ล่าสุด)
            </div>
            <div className="kpi-value primary">{avg('year2568')}%</div>
          </div>
        </div>

        {/* CHART */}
        <div className="chart-card">
          <div className="chart-header">
            <div className="chart-title">กราฟเปรียบเทียบรายเดือน</div>
            <div className="chart-unit">หน่วย: ร้อยละ (%)</div>
          </div>

          <ResponsiveContainer width="100%" height={360}>
            <LineChart data={data}>
              <CartesianGrid vertical={false} strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Legend />

              <ReferenceLine
                y={60}
                stroke="#dc2626"
                strokeDasharray="6 4"
                label={{ value: 'KPI 60%', fill: '#dc2626', fontSize: 11 }}
              />

              <Line
                name="ปี 2567"
                dataKey="year2567"
                stroke="#94a3b8"
                strokeWidth={3}
                strokeDasharray="4 4"
                dot={{ r: 4 }}
              />

              <Line
                name="ปี 2568"
                dataKey="year2568"
                stroke="#2563eb"
                strokeWidth={4}
                dot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>

          <div className="chart-footnote">
            <CheckCircle2 size={16} color="#16a34a" />
            ปี 2568 มีผลการดำเนินงานสูงกว่าปี 2567
          </div>
        </div>

        {/* ================= KPI #2 : Door-to-CT ≤ 25 นาที ================= */}
          <div className="chart-card">

            {/* Header */}
            <div className="chart-header">
              <div>
                <div className="chart-title">
                  KPI Stroke: Door-to-CT ≤ 25 นาที
                </div>
                <div className="dashboard-subtitle">
                  ร้อยละของผู้ป่วย Stroke ที่ได้รับ CT scan ภายใน 25 นาทีหลังถึง ER
                </div>
              </div>
              <div className="chart-unit">หน่วย: ร้อยละ (%)</div>
            </div>

            {/* Summary */}
            <div className="kpi-grid" style={{ marginBottom: '24px' }}>
              <div className="kpi-card">
                <div className="kpi-label">เกณฑ์เป้าหมาย</div>
                <div className="kpi-value">&ge; 60%</div>
              </div>

              <div className="kpi-card highlight">
                <div className="kpi-label">ค่าเฉลี่ย ปี 2568</div>
                <div className="kpi-value primary">57.2%</div>
              </div>

              <div className="kpi-card">
                <div className="kpi-label">สถานะ</div>
                <div className="kpi-value" style={{ color: '#dc2626' }}>
                  ต่ำกว่าเป้าหมาย
                </div>
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={360}>
              <LineChart data={dataDoorToCT}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip
                  formatter={(v, _, p) => [`${v}%`, 'ร้อยละ']}
                  labelFormatter={(l) => `เดือน ${l}`}
                />
                <Legend />

                <ReferenceLine
                  y={60}
                  stroke="#dc2626"
                  strokeDasharray="6 4"
                  label={{ value: 'เป้าหมาย 60%', fill: '#dc2626', fontSize: 11 }}
                />

                <Line
                  name="Door-to-CT ≤ 25 นาที"
                  dataKey="percent"
                  stroke="#2563eb"
                  strokeWidth={4}
                  dot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Insight */}
            <div className="chart-footnote">
              <CheckCircle2 size={16} color="#64748b" />
              ค่าเฉลี่ยทั้งปีต่ำกว่าเกณฑ์ ควรพัฒนา flow ER → CT เพื่อสนับสนุน rtPA
            </div>
          </div>
          {/* ================= KPI #2 : Door-to-CT ≤ 25 นาที ================= */}

          {/* ================= KPI #3 : CT Brain ≤ 40 นาที (Stroke Fast Track) ================= */}
          <div className="chart-card">

            {/* Header */}
            <div className="chart-header">
              <div>
                <div className="chart-title">
                  KPI Stroke: CT Brain ≤ 40 นาที (Fast Track)
                </div>
                <div className="dashboard-subtitle">
                  ร้อยละของผู้ป่วย Stroke Fast Track ที่ได้รับ CT brain ภายใน 40 นาที
                </div>
              </div>
              <div className="chart-unit">เป้าหมาย ≥ 80%</div>
            </div>

            {/* Summary */}
            <div className="kpi-grid" style={{ marginBottom: '24px' }}>
              <div className="kpi-card">
                <div className="kpi-label">เป้าหมาย</div>
                <div className="kpi-value">&ge; 80%</div>
              </div>

              <div className="kpi-card">
                <div className="kpi-label">ค่าเฉลี่ย ปี 2567</div>
                <div className="kpi-value">55.38%</div>
              </div>

              <div className="kpi-card highlight">
                <div className="kpi-label">ค่าเฉลี่ย ปี 2568</div>
                <div className="kpi-value primary">67.41%</div>
              </div>
            </div>

            {/* Chart */}
            <ResponsiveContainer width="100%" height={360}>
              <LineChart>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  interval={0}
                  allowDuplicatedCategory={false}
                  tickLine={false}
                />

                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />

                <ReferenceLine
                  y={80}
                  stroke="#dc2626"
                  strokeDasharray="6 4"
                  label={{ value: 'เป้าหมาย 80%', fill: '#dc2626', fontSize: 11 }}
                />

                <Line
                  data={dataCT40_2567}
                  name="ปี 2567"
                  dataKey="percent"
                  stroke="#94a3b8"
                  strokeWidth={3}
                  strokeDasharray="4 4"
                  dot={{ r: 4 }}
                />

                <Line
                  data={dataCT40_2568}
                  name="ปี 2568"
                  dataKey="percent"
                  stroke="#2563eb"
                  strokeWidth={4}
                  dot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>

            {/* Insight */}
            <div className="chart-footnote">
              <CheckCircle2 size={16} color="#64748b" />
              ผลการดำเนินงานปี 2568 ดีขึ้นจากปี 2567 แต่ยังต่ำกว่าเป้าหมาย 80%
            </div>

          </div>
          {/* ================= KPI #3 : CT Brain ≤ 40 นาที (Stroke Fast Track) =================*/}
          
          {/* ================= KPI #4 : Lab ≤ 45 นาที (Stroke Fast Track) ================= */}
            <div className="chart-card">

              {/* Header */}
              <div className="chart-header">
                <div>
                  <div className="chart-title">
                    KPI Stroke: Lab ≤ 45 นาที (Fast Track)
                  </div>
                  <div className="dashboard-subtitle">
                    ร้อยละของผู้ป่วย Stroke Fast Track ที่ได้รับผลตรวจทางห้องปฏิบัติการภายใน 45 นาที
                  </div>
                </div>
                <div className="chart-unit">เป้าหมาย ≥ 80%</div>
              </div>

              {/* Summary */}
              <div className="kpi-grid" style={{ marginBottom: '24px' }}>
                <div className="kpi-card">
                  <div className="kpi-label">เป้าหมาย</div>
                  <div className="kpi-value">&ge; 80%</div>
                </div>

                <div className="kpi-card">
                  <div className="kpi-label">ค่าเฉลี่ย ปี 2567</div>
                  <div className="kpi-value">67.73%</div>
                </div>

                <div
                  className="kpi-card highlight"
                  style={{ borderLeftColor: '#16a34a' }}
                >
                  <div className="kpi-label">ค่าเฉลี่ย ปี 2568</div>
                  <div
                    className="kpi-value"
                    style={{ color: '#16a34a' }}
                  >
                    89.30%
                  </div>
                </div>
              </div>

              {/* Chart */}
              <ResponsiveContainer width="100%" height={360}>
                <LineChart>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" />

                  <XAxis
                    dataKey="month"
                    interval={0}
                    allowDuplicatedCategory={false}
                  />
                  <YAxis domain={[0, 100]} />

                  <Tooltip />
                  <Legend />

                  <ReferenceLine
                    y={80}
                    stroke="#dc2626"
                    strokeDasharray="6 4"
                    label={{ value: 'เป้าหมาย 80%', fill: '#dc2626', fontSize: 11 }}
                  />

                  <Line
                    data={dataLab45_2567}
                    name="ปี 2567"
                    dataKey="percent"
                    stroke="#94a3b8"
                    strokeWidth={3}
                    strokeDasharray="4 4"
                    dot={{ r: 4 }}
                  />

                  <Line
                    data={dataLab45_2568}
                    name="ปี 2568"
                    dataKey="percent"
                    stroke="#16a34a"
                    strokeWidth={4}
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>

              {/* Insight */}
              <div className="chart-footnote">
                <CheckCircle2 size={16} color="#16a34a" />
                ปี 2568 มีผลการดำเนินงานผ่านเกณฑ์ 80% อย่างต่อเนื่อง
              </div>

            </div>
          {/* ================= KPI #4 : Lab ≤ 45 นาที (Stroke Fast Track) =================*/}

      </div>
    </div>
  );
};

export default App;
