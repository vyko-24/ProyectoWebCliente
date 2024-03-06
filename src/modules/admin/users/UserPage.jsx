import { Badge, Button, Card, Label, TextInput, Modal } from 'flowbite-react';
import React, { useEffect, useMemo } from 'react'
import { useState } from 'react';
import AxiosClient from '../../../config/http-gateway/http-client';
import TableComponent from '../../../components/TableComponent';
import { AiFillEdit, AiFillDelete, AiOutlineDoubleLeft } from "react-icons/ai";
import { FaSearch, FaPlus } from "react-icons/fa";
import ModalComponent from '../../../components/ModalComponent';

const UserPage = () => {
    const [loadin, setLoading] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [filterText, setFilterText] = useState("");
    const columns = useMemo(() => [
        {
            name: "#",
            cell: (row, index) => <>{index + 1}</>,
            sortable: true,
            selector: (row, index) => index + 1,
        },
        {
            name: "Usuario",
            cell: (row, index) => <>{row.username}</>,
            sortable: true,
            selector: (row, index) => row.username,
        },
        {
            name: "Rol",
            cell: (row, index) => <>{row.roles[0].name}</>,
            sortable: true,
            selector: (row, index) => row.roles[0].name,
        },
        {
            name: "Estado",
            cell: (row) => <Badge color={row.status ? 'success' : 'failure'}>
                {row.status ? 'Activo' : 'Inactivo'}
            </Badge>,
            selector: () => row.status,
            sortable: true,
        },
        {
            name: "Acciones",
            cell: (row) => (
                <>
                    <Button outline size={'sm'} pill color='warning'>
                        {<AiFillEdit />}
                    </Button>
                    <Button outline size={'sm'} pill color={row.status ? 'failure' : 'success'}>
                        {row.status ? <AiFillDelete /> : <AiOutlineDoubleLeft />}
                    </Button>
                </>
            ),
        },
    ]);

    const getUsers = async () => {
        try {
            setLoading(true);
            const response = await AxiosClient({
                url: "/user/",
                method: "GET",
            });
            console.log(response);
            if (!response.error) {
                setUsers(response.data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    const filter = () => {
        return users.filter(user => user.username.includes(filterText));
    }

    return (
        <>
            <section className="flex flex-col pt-4 px-3 gap-4">
                <h4 className='text-2xl'>Usuarios</h4>
                <div className='flex w-full justify-between'>
                    <div className="max-w-md">

                        <Label htmlFor="search" value="Buscador" />

                        <TextInput id="search" type="text" rightIcon={FaSearch}
                            placeholder="Buscar..." required onChange={(e) => setFilterText(e.target.value)} value={filterText} />

                    </div>
                    <div className='justify-center'>
                        <Button pill outline color='success' onClick={() => setOpenModal(true)}><FaPlus /></Button>
                            <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />
                    </div>
                </div>
                <Card>
                    <TableComponent columns={columns} data={filter()} progress={loadin} />
                </Card>
            </section>
        </>
    )
}

export default UserPage