import Galeria from '../../components/Galeria'
import Pagina from '../../components/Pagina'
import Link from 'next/link'
import React from 'react'
import { Card, Col, Container, Row, Table } from 'react-bootstrap'
import apiDeputados from '../../services/apiDeputados'
import Rodape from '../../components/Rodape'

const detalhes = ({ deputados , despesas, profissoes }) => {

    console.log(despesas)
    
    return (
        <Pagina titulo={deputados.nomeCivil}>
            <Container>
                <br></br>
            <Row xs='auto'>

                <Col sm md={2}>
                    <Card>
                        <Card.Img variant="top" src={deputados.ultimoStatus.urlFoto} />
                        <Card.Body>
                            <Card.Title>{deputados.nomeCivil}</Card.Title>
                            <p>Partido: {deputados.ultimoStatus.siglaPartido}</p>
                            <p>UF Partido: {deputados.ultimoStatus.siglaUf}</p>
                        </Card.Body>
                    </Card>
                    <br></br>
                    <Link className="btn btn-danger" href={'/deputados/'}>voltar</Link>
                </Col>


                <Col sm md={8}>
                    <div><h4>Despesas</h4></div>
                    <br></br>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Discrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        {despesas.map(item=>(
                            <tr>
                                <td>{item.dataDocumento}</td>
                                <td>{item.tipoDespesa}</td>
                                <td>R$: {item.valorDocumento}</td>
                            </tr>
                        ))}

                    </tbody>
                </Table>
                </Col>
                <Col md={2}>
                <div><h4>profissões</h4></div>

                <ul>
                    {profissoes.map(item=>(
                        <li>
                            {item.titulo}
                        </li>
                    ))}

                </ul>
                
                </Col>
            </Row>
            <br></br>




        
            
            </Container>
            </Pagina>
    )
}

export default detalhes

export async function getServerSideProps(context) {

    const id = context.params.id

    const res = await apiDeputados.get('/deputados/' + id)

    const deputados = res.data.dados

    const resultado = await apiDeputados.get('/deputados/' + id + '/despesas')

    const despesas = resultado.data.dados

    const resul = await apiDeputados.get('/deputados/' + id + '/profissoes')

    const profissoes = resul.data.dados


    return {

        props: { deputados, despesas, profissoes }, // will be passed to the page component as props
    }
}