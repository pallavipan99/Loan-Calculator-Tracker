import React from 'react'

export default function ScheduleView({ schedule }) {
  const totals = schedule.totals || { total_interest: 0, total_paid: 0, months: 0 }
  const rows = schedule.schedule || []

  const card = (label, value) => (
    <div style={{ flex: 1, padding: 16, border: '1px solid #eee', borderRadius: 12, boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
      <div style={{ fontSize: 12, color: '#666', marginBottom: 4 }}>{label}</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>{value}</div>
    </div>
  )

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 12 }}>
        {card('Total Paid', `$${totals.total_paid?.toFixed(2)}`)}
        {card('Total Interest', `$${totals.total_interest?.toFixed(2)}`)}
        {card('Months to Payoff', totals.months)}
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ textAlign: 'left', borderBottom: '1px solid #eee' }}>
              <th style={{ padding: 8 }}>#</th>
              <th style={{ padding: 8 }}>Date</th>
              <th style={{ padding: 8, textAlign: 'right' }}>Payment</th>
              <th style={{ padding: 8, textAlign: 'right' }}>Interest</th>
              <th style={{ padding: 8, textAlign: 'right' }}>Principal</th>
              <th style={{ padding: 8, textAlign: 'right' }}>Extra</th>
              <th style={{ padding: 8, textAlign: 'right' }}>Balance</th>
            </tr>
          </thead>
          <tbody>
            {rows.map(r => (
              <tr key={r.period}>
                <td style={{ padding: 8 }}>{r.period}</td>
                <td style={{ padding: 8 }}>{r.date}</td>
                <td style={{ padding: 8, textAlign: 'right' }}>${r.payment.toFixed(2)}</td>
                <td style={{ padding: 8, textAlign: 'right' }}>${r.interest.toFixed(2)}</td>
                <td style={{ padding: 8, textAlign: 'right' }}>${r.principal.toFixed(2)}</td>
                <td style={{ padding: 8, textAlign: 'right' }}>${r.extra_applied.toFixed(2)}</td>
                <td style={{ padding: 8, textAlign: 'right' }}>${r.balance.toFixed(2)}</td>
              </tr>
            ))}
            {rows.length === 0 && <tr><td colSpan="7" style={{ padding: 16, textAlign: 'center', color: '#666' }}>No schedule yet</td></tr>}
          </tbody>
        </table>
      </div>
    </div>
  )
}
