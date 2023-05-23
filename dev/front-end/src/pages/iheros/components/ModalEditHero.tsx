import api from '@/api';
import {
  Button,
  ButtonGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
} from '@chakra-ui/react';
import { useMutation, useQueryClient } from 'react-query';
import toast from '../../../views/login/utils';
import { FormProvider, useForm } from 'react-hook-form';
import { FormInput } from '../../../components/form/FormInput';
import { FormSelect } from '../../../components/form/FormSelect';
import { AiOutlineBarcode } from 'react-icons/ai';
import { BsCardText } from 'react-icons/bs';
import { heroClass } from './HeroCreate';
import { FaPlus } from 'react-icons/fa';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { heroSchema } from '../utils';

const ModalEditHero = ({ isOpen, onClose, hero }) => {
  const queryClient = useQueryClient();

  const methods = useForm({
    resolver: yupResolver(heroSchema),
    defaultValues: hero
  });
  const { handleSubmit } = methods;


  const { mutateAsync } = useMutation(api.hero.edit);

  const onSubmit = handleSubmit(async (formData) => {


    try {
      await mutateAsync({
        name: formData.name,
        class: formData.class,
        longi: formData.longi,
        lati: formData.lati,
        id: hero.id,
      });
      queryClient.invalidateQueries(['api.heros.list']);
      onClose();
      toast.success('heroi editado com sucesso');
    } catch (err) {
      toast.error(err.message);
    }
  });


  return (

    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}  preserveScrollBarGap closeOnOverlayClick>
      <ModalOverlay/>
      <ModalContent className="card">
          <ModalHeader className="card-header">Editar Heroi</ModalHeader>
          <ModalBody p={3}>

          <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
        <SimpleGrid  gap={4}>
          <FormInput name="name" label="Nome" icon={AiOutlineBarcode} defaultValue={hero?.name}/>
          <FormInput name="lati" label="Latitude" icon={BsCardText}  defaultValue={hero?.lati}/>
          <FormInput name="longi" label="Longitude" icon={BsCardText} defaultValue={hero?.longi} />
          <FormSelect name="class" label="Classe" items={heroClass} defaultValue={hero?.class} />
        </SimpleGrid>

        <Button
              alignSelf={"center"}
              my={5}
              mx={5}
              type="submit"
              colorScheme="green"
              size="sm"
              mr={2}
              leftIcon={<FaPlus size=".8rem" />}
              data-tour-id="button_create_top"
            >
              Editar
            </Button>
        </form>
      </FormProvider>
          </ModalBody>
      </ModalContent>
    </Modal>
  )};

export default ModalEditHero;
