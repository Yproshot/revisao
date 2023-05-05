import Galeria from '../../components/Galeria'
import Pagina from '../../components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'

const detalhes = ({ deputados }) => {
    console.log(deputados)
    return (
        <Pagina titulo={deputados.nomeCivil}>

            <Row md={4}>

                    <Col className='md-2'>
                        <Card>
                            <Card.Img variant="top" src={deputados.ultimoStatus.urlFoto} />
                            <Card.Body>
                                <Card.Title>{deputados.nomeCivil}</Card.Title>
                                <p>Partido:{deputados.ultimoStatus.siglaPartido}</p>
                                <p>UF Partido: {deputados.ultimoStatus.siglaUf}</p>
                                <Link className="btn btn-danger" href={'/deputados/'}>voltar</Link>
                            </Card.Body>
                        </Card>

                    </Col>

            </Row>




        </Pagina>
    )
}

export default detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiDeputados.get('/deputados/' + id)

    const deputados = res.data.dados


    return {

        props: { deputados }, // will be passed to the page component as props
    }
}