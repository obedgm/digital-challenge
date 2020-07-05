import React from 'react'
import styled from 'styled-components'
import {ArrowIosDownwardOutline} from '@styled-icons/evaicons-outline/ArrowIosDownwardOutline'
import {SearchAlt2} from '@styled-icons/boxicons-regular/SearchAlt2'
import {Plus} from '@styled-icons/boxicons-regular/Plus'

const Text = styled.a`
    display: flex;
    margin-left: 35px;
    margin-top: 35px;
    margin-bottom: 35px;
    font-weight: bold;
    font-size: 22px;
    color: rgb(64, 78, 95);
`
const SubText = styled.a`
    display: flex;
    margin-left: 35px;
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 18px;
    color: rgb(64, 78, 95);
`

const Wrapper = styled.section`
    display: flex;
    &:hover {
            background-color: white;
        }
`
export const Arrow = styled(ArrowIosDownwardOutline)`
    margin-right: 35px;
    float: right;
    z-index: 2;
    margin-top: 35px;
    margin-left: auto;
    height: 40px !important;
    width: 40px !important;
    color: rgb(64, 78, 95);
`

export const Search = styled(SearchAlt2)`
    margin-right: 35px;
    float: right;
    z-index: 2;
    margin-top: 35px;
    margin-left: auto;
    height: 40px !important;
    width: 40px !important;
    color: rgb(64, 78, 95);
`

export const PlusSign = styled(Plus)`
    margin-right: 35px;
    float: right;
    z-index: 2;
    margin-top: 35px;
    margin-left: auto;
    height: 40px !important;
    width: 40px !important;
    color: rgb(64, 78, 95);
`
const Line = ({color}) => (
    <hr 
        style={{
            color: color,
            backgroundColor: color,
            height: 0,
            marginLeft: 35,
            width: 223,
            borderColor: color

        }}
    
    />
);

const Sidebar = () => {
    return (
        [<Wrapper>
            <Text>Menu</Text>
            <Arrow />
        </Wrapper>,
        <Wrapper>
            <Text>Buscar</Text>
            <Search />
        </Wrapper>,
        <Wrapper>
            <Text>Agregar</Text>
            <PlusSign />
        </Wrapper>,
        <Line color="rgb(64, 78, 95)" />,
        <SubText>Label</SubText>,
        <SubText>Label</SubText>
        ]
    )
}

export default Sidebar;