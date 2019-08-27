import React, { Component } from 'react';
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";


//import { table, Button,Form,FormGroup,Label,Input } from 'reactstrap';
export class FormProduct extends Component {
  render() {
	  
    return (
   
	  <Card profile>
		 <h1 className='font-weight-bold text-center'>Detalle de Productos</h1>	
	  </Card>
    
    );
  }
}

export class ListProduct extends Component {
	
	

	
  render() {
let id = -1;
function createData() {

}

const rows = {
	rows1:[
  createData()

]
};
console.log('Inicio');
console.log(rows);
	  
	  	const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
  
};
const tableList={
	tabla:[["1", "Empresa1", ],
                ["2", "empresa2"]
				]};
//const { classes } = styles;
//console.log(classes);
	  const {products}=this.props;
	//tableList.tabla={products};
	//console.log('Antes');
	//console.log(products);
	/*const newTasks = this.props.products.map(task => {
      //return JSON.stringify(task)
	  return task
    });*/
	const newTasks=  this.props.products.map((key, index)=>{
		return {key[index]}
	}
	)
	console.log('despues');
	console.log(newTasks);

	  //const { classes } = props;
    return (
        <Card>
          <CardHeader color="primary">
            <h4 className={styles.cardTitleWhite}>Listados</h4>
         
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Nombre"]}
              tableData={[newTasks]}
            />
          </CardBody>
        </Card>
      
   
    );
  }
}

export default class ProductBox extends Component {
	url='http://localhost:85/produ3/web/app_dev.php/listadoJson/empresa';
	state={
		products:[],
		rows:[]
	}
  componentDidMount() {
	  fetch(this.url)
			.then(response => response.json())
			/*.then(products => console.log(products))*/
			.then(products => this.setState({products}))
			.catch(e => console.log(e));
  }
  render() {
    return (
	 <GridContainer>
		<GridItem xs={6} >
			<ListProduct products = {this.state.products}/>
		</GridItem>
		<GridItem xs={6} >	
			<FormProduct/>
		</GridItem>
	  </GridContainer>
    );
  }
}


