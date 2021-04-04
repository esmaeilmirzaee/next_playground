import * as d3 from "d3";
let menUrl = "https://udemy-react-d3.firebaseio.com/tallest_men.json";
let womenUrl = "https://udemy-react-d3.firebaseio.com/tallest_women.json";
export default class D3Chart {
  constructor(element) {
    this.element = element;
    this.DesignChart();
    this.FetchData();
  }
  DesignChart() {
    this.Scaffold();
    this.Axis();
    this.DataNormalize();
    this.Labels();
  }
  FetchData() {
    Promise.all([d3.json(menUrl), d3.json(womenUrl)]).then(data => {
      this.menData = data[0];
      this.womenData = data[1];
      this.data = this.menData;
      this.update("men");
    });
  }
  Scaffold() {
    this.margin = { top: 100, right: 50, bottom: 50, left: 70 };
    this.width = 800 - this.margin.left - this.margin.right;
    this.height = 600 - this.margin.top - this.margin.bottom;

    this.svg = d3
      .select(this.element)
      .append("svg")
      .attr("width", this.width + this.margin.left + this.margin.right)
      .attr("height", this.height + this.margin.top + this.margin.bottom)
      .attr("class", "barChart d3 chart")
      .append("g")
      .attr(
        "transform",
        "translate(" + this.margin.left + "," + this.margin.top + ")"
      );
  }
  Axis() {
    this.yAxis = this.svg
      .append("g")
      .attr("fill", "grey")
      .attr("class", "y axis");
    this.xAxis = this.svg
      .append("g")
      .attr("class", "x axis")
      .attr("fill", "grey")
      .attr("transform", "translate(" + 0 + "," + this.height + ")");
  }
  DataNormalize() {
    this.y = d3.scaleLinear().range([this.height, 0]);
    this.x = d3
      .scaleBand()
      .range([0, this.width])
      .paddingInner(0.2)
      .paddingOuter(0.5);
  }
  Labels() {
    this.svg
      .append("text")
      .attr("class", "label")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("font-size", "20px")
      .attr("x", -(this.height / 2))
      .attr("y", -50)
      .text("Height (cm)");

    this.xLabel = this.svg
      .append("text")
      .attr("class", "label")
      .attr("text-anchor", "middle")
      .attr("font-size", "20px")
      .attr("x", this.width / 2)
      .attr("y", this.height + 50);
  }
  update(gender) {
    this.xLabel.text("The World Tallest " + gender || "men");
    this.data = gender === "men" ? this.menData : this.womenData;
    this.y.domain([
      d3.min(this.data, d => d.height) * 0.99,
      d3.max(this.data, d => d.height)
    ]);
    this.x.domain(this.data.map(d => d.name));

    this.xAxis.call(d3.axisBottom(this.x).tickPadding(50));
    this.yAxis.call(d3.axisLeft(this.y));

    // Data Join
    this.rects = this.svg.selectAll("rect").data(this.data);
    // Exit
    this.rects
      .exit()
      .transition()
      .duration(500)
      .attr("height", 0)
      .attr("y", this.height)
      .remove();
    // Update Data
    this.rects
      .transition()
      .duration(500)
      .attr("x", d => this.x(d.name))
      .attr("y", d => this.y(d.height))
      .attr("width", this.x.bandwidth)
      .attr("height", d => this.height - this.y(d.height));
    // Enter Data
    this.rects
      .enter()
      .append("rect")
      .attr("x", d => this.x(d.name))
      .attr("y", this.height)
      .attr("width", this.x.bandwidth)
      .attr("fill", "#262626")
      .attr("height", 0)
      .attr("fill-opacity", 0)
      .transition()
      .duration(500)
      .attr("height", d => this.height - this.y(d.height))
      .attr("y", d => this.y(d.height))
      .attr("fill-opacity", 1);
  }
}
