import React from 'react';

const RevDataFormComponent = ({ state, setState }) => <>
  <div className="rev-data-form">
    <div className="form-title">
      <p>Find out how fast your business will grow.</p>
    </div>
    <div className="form-inputs">
      <div className="form-input">
        <label htmlFor="currentMRR">Current MRR</label>
        <input type="number" id="currentMRR" name="currentMRR" value={state.currentMRR} onChange={(e) => { setState('currentMRR', e.currentTarget.value) }} />
      </div>
      <div className="form-input">
        <label htmlFor="revenueGrowth">REVENUE GROWTH</label>
        <input type="number" id="revenueGrowth" name="revenueGrowth" value={state.revenueGrowth} onChange={(e) => { setState('revenueGrowth', e.currentTarget.value) }} />
      </div>
      <div className="form-input">
        <label htmlFor="revenueChurn">REVENUE CHURN</label>
        <input type="number" id="revenueChurn" name="revenueChurn" value={state.revenueChurn} onChange={(e) => { setState('revenueChurn', e.currentTarget.value) }} />
      </div>
      <div className="form-input">
        <label htmlFor="projectionTime">PROJECTION TIME (MONTHS)</label>
        <input type="number" id="projectionTime" name="projectionTime" value={state.projectionTime} onChange={(e) => { setState('projectionTime', e.currentTarget.value) }} />
      </div>
    </div>
  </div>
</>;

const RevTable = () => <>
  <div className="rev-table">
      table container
  </div>
</>;

const RevChart = () => <>
  <div className="rev-chart">
    chart container
  </div>
</>

const RevDataContainer = ({ state }) => <>
  <div className="rev-data-view-container">
    {
      state.dataView === 'chart'
      && <RevChart />
    }
    {
      state.dataView === 'table'
      && <RevTable />
    }
  </div>
</>;

const RevCard = () => <>
  <div className="rev-card">
    <div className="card-title">
      <h3>Card layout</h3>
    </div>
  </div>
</>;

const RevDataComponent = () => {
  const [revData, setRevData] = React.useState({
    dataView: 'chart',
    currentMRR: 0,
    revenueGrowth: 0,
    revenueChurn: 0,
    projectionTime: 0,
  });

  const handleValueChange = (key, value) => setRevData((prevState) => ({
    ...prevState,
    [key]: value,
  }));

  return <>
    <div className="rev-parent">
      <div className="rev-forecast-container">
        <div className="rev-container">
          <div className="rev-radio-container">
            <input type="radio" name="dataView" id="chart" value='chart' onChange={() => { handleValueChange('dataView', 'chart') }} checked={ revData.dataView === 'chart' } />
            <label htmlFor="chart">Data</label>
            <input type="radio" name="dataView" id="table" value='table' onChange={() => { handleValueChange('dataView', 'table') }} checked={ revData.dataView === 'table' } />
            <label htmlFor="table">Table</label>
          </div>
          <div className="rev-data-container">
            <RevDataFormComponent state={revData} setState={handleValueChange} />
            <RevDataContainer state={revData} />
          </div>
        </div>
        <div className="rev-meta">
          <RevCard />
        </div>
      </div>
    </div>
  </>
};

export default RevDataComponent;