import { useEffect, useRef } from 'react'
import * as d3 from 'd3'

export default function Sandbox() {
  const canvas = useRef(null)

  useEffect(() => {
    showCanvas()
  }, [])

  const showCanvas = () => {
    const width = 600
    const height = 400
    const margin = {
      top: 40,
      bottom: 40,
      left: 60,
      right: 60
    }

    // const xvals = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const yvals = [5, 6, 2, 7, 9, 1, 3, 4, 8, 3, 6, 7]

    const months = ['Jan', 'Feb', 'Mar', "Apr", 'May', 'Jun', 'July', 'Oct', 'Nov', 'Dec']

    // xminYmin
    const svg = d3.select(canvas.current)
      .append('svg')
      .attr("viewBox", `0 0 ${width + margin.right + margin.left} ${height + margin.top + margin.bottom}`)
      .attr('preserveAspectRatio', "xMinYMin")
      .style('background-color', 'beige')
      .attr('width', `${width}`)
      .attr('height', `${height}`)

    const xScale = d3.scaleBand()
      .domain(months)
      .range([margin.left, width + margin.left])
    const xAxis = d3.axisBottom(xScale)

    // .attr('transform', 'rotate(45)')
    // .attr('y', 10)
    // .attr('x', 20)
    svg.append('g')
      .call(xAxis)
      .attr('transform', `translate(0, ${height})`)
      .selectAll('text')
      .attr('text-anchor', 'start')
      .attr('transform', 'rotate(45)')
      .attr('x', 10)

    // Y axis
    const yScale = d3.scaleLinear()
      .domain([0, d3.max(yvals)])
      .range([height - margin.top, 0])

    const yAxis = d3.axisLeft(yScale)

    svg.append('g')
      .call(yAxis)
      .attr('transform', `translate(${margin.left}, ${margin.top})`)

  }
  return (
    <div className='sandbox'>
      <div className="canvas" ref={canvas}></div>
    </div>
  )
}