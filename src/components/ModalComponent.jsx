import React, { useEffect, useMemo } from 'react'
import { Badge, Button, Card, Label, TextInput, Modal, Select } from 'flowbite-react';
import { useState } from 'react';
import AxiosClient from '../config/http-gateway/http-client';

const ModalComponent = ({ openModal, setOpenModal }) => {
    return (
        <div>
            <Modal show={openModal} size={'sm'} onClose={() => setOpenModal(false)}>
                <Modal.Header>Registrar Usuario</Modal.Header>
                <Modal.Body>
                    <form className="flex max-w-md flex-col gap-4">
                        <div className="md:w-1">

                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="username" value="Nombre de usuario" />
                                </div>
                                <TextInput id="username" type="text" placeholder="username" required />
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Contraseña" />
                                </div>
                                <TextInput id="password" type="password" placeholder="**********" required />
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="avatar" value="Nombre de usuario" />
                                </div>
                                <TextInput id="avatar" type="file" placeholder="Subir archivo" required />
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="role" value="Rol" />
                                </div>
                                <Select id="role" required>
                                    <option value={"ADMIN_ROLE"}>Administrador</option>
                                    <option value={"USER_ROLE"}>Usuario</option>
                                    <option value={"CLIENT_ROLE"}>Cliente</option>
                                </Select>
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="name" value="Nombre" />
                                </div>
                                <TextInput id="name" type="text" placeholder="Nombre" required />
                            </div>
                        </div>
                        <div className="md:w-1">
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="surname" value="Apellido Paterno" />
                                </div>
                                <TextInput id="surname" type="text" placeholder="Apellido Paterno" required />
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="lastname" value="Apellido Materno" />
                                </div>
                                <TextInput id="lastname" type="text" placeholder="Apellido Materno" required />
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="birthdate" value="Fecha de nacimiento" />
                                </div>
                                <TextInput id="birthdate" type="date" required />
                            </div>
                            <div className='py-4'>
                                <div className="mb-2 block">
                                    <Label htmlFor="curp" value="CURP" />
                                </div>
                                <TextInput id="curp" type="text" placeholder="CURP" required />
                            </div>
                        </div>
                    <Button pill outline color='success' type="submit" >Registrar</Button>
                    </form>
                </Modal.Body>
                <Modal.Footer className='justify-between'>
                    <Button pill outline color='failure' onClick={() => setOpenModal(false)}>Salir</Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default ModalComponent