import React from 'react'
import { SketchPicker } from 'react-color'
import { Panel as ColorPicker } from 'rc-color-picker'
import 'rc-color-picker/assets/index.css'
import GradientPicker from '../src'
import './App.css'

const addOpacityToHex = (color, opacity = 1) => {
	if (opacity === 1 || color.length > 9) {
		return color;
	}

	return color + Math.floor(opacity * 255).toString(16);
};

const WrappedSketchPicker = ({ onSelect, ...rest }) => {
	return <SketchPicker { ...rest } color={addOpacityToHex(rest.color, rest.opacity)} onChange={ c => {
		onSelect(c.hex, c.rgb.a)
	} } />
}

const WrappedColorPicker = ({ onSelect, ...rest }) => {
	return <ColorPicker { ...rest } onChange={ c => {
		onSelect(c.color, c.alpha / 100)
	} } />
}

const Result = ({ msg }) => {
  const info = !msg ? 'Result area' : JSON.stringify(msg)
  return (<div className="result">{ info } </div>)
}

const stock = [
  [{pos:0,color:'#f00'},{pos:0.3,color:'#0f0'},{pos:1,color:'#00f'}],
  [{pos:0,color:'#ff0'},{pos:0.6,color:'#f0f'},{pos:1,color:'#0ff'}],
  [{pos:0,color:'#000764'},{pos:0.16,color:'#206bcb'},{pos:0.42,color:'#edffff'},{pos:0.64,color:'#ffaa00'},{pos:0.86,color:'#000200'},{pos:1,color:'#000764'}]
]

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      palette1: [
	      { pos: '0.00', color: '#7e20cf' },
	      { pos: '0.28', color: '#d0021b' },
	      { pos: '0.65', color: '#ffcc00' },
	      { pos: '1.00', color: '#00ccff' }
      ],
      palette2: [
	      { pos: '0.00', color: '#eef10b' },
	      { pos: '0.49', color: '#d78025' },
	      { pos: '0.72', color: '#d0021b' },
	      { pos: '1.00', color: '#7e20cf' }
      ],
      palette3: stock[0],
      selected: stock[0]
    }
  }
  render() {
    return (
	    <div className="app-content">

		    <div className="demo">
			    <div className="title">
				    With&nbsp;
				    <a href="https://github.com/react-component/color-picker">rc-color-picker</a>
			    </div>
			    <Result msg={ this.state.palette1 } />
			    <GradientPicker {...{
				    width: 320,
				    height: 32,
				    palette: this.state.palette1,
				    onPaletteChange: (palette1) => this.setState({ palette1 })
			    }}>
				    <WrappedColorPicker />
			    </GradientPicker>
		    </div>

		    <div className="demo">
			    <div className="title">
				    With&nbsp;
				    <a href="https://github.com/casesandberg/react-color/">react-color</a>
				    &nbsp;picker
			    </div>
			    <Result msg={ this.state.palette2 } />
			    <GradientPicker {...{
				    width: 320,
				    height: 32,
				    palette: this.state.palette2,
				    onPaletteChange: (palette2) => this.setState({ palette2 })
			    }}>
				    <WrappedSketchPicker {...{
					    width: 200
				    }} />
			    </GradientPicker>
		    </div>

		    <div className="demo">
			    <div className="title">With default color picker</div>
			    <Result msg={ this.state.palette3 } />
			    <GradientPicker {...{
				    width: 320,
				    height: 32,
				    palette: this.state.palette3,
				    onPaletteChange: (palette3) => this.setState({ palette3 })
			    }} />
			    <div className="title">Change prop 'palette'</div>
			    <div>
				    <select onChange={ e => this.setState({ palette3: stock[e.target.value] }) }>
					    <option>Select palette</option>
					    { stock.map((_, i) => <option key={ i } value={ i }>#{ i + 1 }</option>) }
				    </select>
			    </div>
		    </div>

	    </div>
    )
  }
}

export default App
