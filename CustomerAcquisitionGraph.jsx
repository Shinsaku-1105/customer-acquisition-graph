const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } = Recharts;
const { motion } = framerMotion;

const data = [
  { name: '短', 弊社サービス: 10, SNS運用代行: 5, インフルエンサー広告: 2 },
  { name: '', 弊社サービス: 30, SNS運用代行: 10, インフルエンサー広告: 5 },
  { name: '', 弊社サービス: 20, SNS運用代行: 8, インフルエンサー広告: 8 },
  { name: '', 弊社サービス: 50, SNS運用代行: 12, インフルエンサー広告: 10 },
  { name: '', 弊社サービス: 40, SNS運用代行: 15, インフルエンサー広告: 12 },
  { name: '', 弊社サービス: 60, SNS運用代行: 18, インフルエンサー広告: 15 },
  { name: '', 弊社サービス: 55, SNS運用代行: 20, インフルエンサー広告: 18 },
  { name: '', 弊社サービス: 80, SNS運用代行: 22, インフルエンサー広告: 20 },
  { name: '', 弊社サービス: 70, SNS運用代行: 25, インフルエンサー広告: 22 },
  { name: '長', 弊社サービス: 90, SNS運用代行: 28, インフルエンサー広告: 25 },
];

const steps = [
  { number: 1, text: 'インフラを整える', y: 20 },
  { number: 2, text: 'インフルエンサー紹介による流入の加速を担保', y: 50 },
  { number: 3, text: '広告を通して間接流入を促進', y: 80 },
];

function CustomerAcquisitionGraph() {
  return (
    <div style={{ backgroundColor: '#1a202c', padding: '1.5rem', borderRadius: '0.5rem', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', maxWidth: '64rem', margin: '0 auto', color: 'white' }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', textAlign: 'center' }}
      >
        他社との顧客獲得スピードの違いは一目瞭然です。
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ height: '400px', width: '100%' }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1a202c', border: 'none' }}
              itemStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ color: '#fff' }} />
            <Line type="monotone" dataKey="弊社サービス" stroke="#ecc94b" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="SNS運用代行" stroke="#718096" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="インフルエンサー広告" stroke="#a0aec0" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      <div style={{ marginTop: '2rem' }}>
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div style={{ backgroundColor: '#ecc94b', color: '#1a202c', borderRadius: '9999px', width: '2rem', height: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', marginRight: '0.75rem', flexShrink: 0 }}>
              {step.number}
            </div>
            <div style={{ backgroundColor: '#2d3748', padding: '0.75rem', borderRadius: '0.5rem', flexGrow: 1 }}>
              <p>{step.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.render(<CustomerAcquisitionGraph />, document.getElementById('root'));
