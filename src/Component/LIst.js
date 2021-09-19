
import React from 'react';
import { BarLoader } from 'react-spinners';
import { Card, CardBody, CardFooter, CardHeader, CardImg, CardSubtitle, CardText, CardTitle } from "reactstrap";

export default function List({ list1, loading }) {

    return (
        <div >
            {
                list1.map((item) => {
                    return (

                        (loading) ? <BarLoader loading />
                            :
                            <div className="m-3 list">
                                <Card key={item.recipe.lebel} className="listItem">
                                    <CardHeader>
                                        <CardTitle>{item.recipe.label}</CardTitle>
                                    </CardHeader>
                                    <BarLoader loading={loading} />  <CardImg top width="100%" className="listImg" src={item.recipe.image} alt="Card image cap" />
                                    <CardBody>
                                        <CardSubtitle> Cuisine Type:</CardSubtitle>                                   {item.recipe.cuisineType.map((ci) => {
                                            return (<CardText>{ci}</CardText>)

                                        })}
                                        <CardSubtitle> Dish Type:</CardSubtitle>
                                        {item.recipe.dishType.map((ci) => {
                                            return (<CardText>{ci}</CardText>)

                                        })}
                                        <div className="ingrediantList">
                                            <CardFooter >
                                                <CardSubtitle>Ingredients: </CardSubtitle>
                                                <ol >
                                                    {
                                                        item.recipe.ingredientLines.map((ci) => {
                                                            return (<CardText><li>{ci}</li></CardText>)

                                                        })}
                                                </ol>
                                            </CardFooter>
                                        </div >
                                    </CardBody>
                                </Card>
                            </div>
                    )
                })
            }

        </div>
    )
}


