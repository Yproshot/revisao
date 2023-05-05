import Pagina from "../../components/Pagina";
import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import apiDeputados from "../../services/apiDeputados";
import Galeria from "../../components/Galeria";

const index = (props) => {
    return (
        <Pagina titulo="Deputados">
            <Row  md={4}>

                {props.deputados.map(item =>
                    <Col className="mb-3">
                        <Card>
                            <Link href={'/deputados/' + item.id}>
                            <Card.Img variant="top" src={item.urlFoto} />
                            </Link>
                        </Card>

                    </Col>

)}
            </Row>

          






        </Pagina>
    )
}

export default index

export async function getServerSideProps(context) {

    const resultado = await apiDeputados.get('/deputados')

    const deputados = resultado.data.dados

    return {
        props: { deputados }, // will be passed to the page component as props
    }
}
