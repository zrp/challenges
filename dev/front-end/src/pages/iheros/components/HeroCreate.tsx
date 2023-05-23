import api from '@/api';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup.umd';
import { FormProvider, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { FormInput } from '@/components/form/FormInput';
import { FormSelect } from '@/components/form/FormSelect';
import { Button, SimpleGrid } from '@chakra-ui/react';
import { AiOutlineBarcode } from 'react-icons/ai';
import { BsCardText } from 'react-icons/bs';
import { FaPlus } from 'react-icons/fa';
import { heroSchema } from '../utils';
import toast from '../../../views/login/utils';

export const heroClass = [
  { label: 'S', value: 'S' },
  { label: 'A', value: 'A' },
  { label: 'B', value: 'B' },
  { label: 'C', value: 'C' },
];

interface HeroCreateProps {
  onClose: () => void;
}

const HeroCreate = ({onClose}:HeroCreateProps) => {
  const queryClient = useQueryClient();

  const methods = useForm({
    resolver: yupResolver(heroSchema),
  });
  const { handleSubmit } = methods;


  const { mutateAsync } = useMutation(api.hero.create);

  const onSubmit = handleSubmit(async (formData) => {


    delete formData.id;
    try {
      await mutateAsync({
        name: formData.name,
        class: formData.class,
        longi: formData.longi,
        lati: formData.lati,
      });
      queryClient.invalidateQueries(['api.heros.list']);
      onClose();
      toast.success('heroi criado com sucesso');
    } catch (err) {
      toast.error('AQUI');
    }
  });


  return (
    <FormProvider {...methods}>
      <form onSubmit={onSubmit}>
      <SimpleGrid  gap={4}>
        <FormInput name="name" label="Nome" icon={AiOutlineBarcode} />
        <FormInput name="lati" label="Latitude" icon={BsCardText}  />
        <FormInput name="longi" label="Longitude" icon={BsCardText} />
        <FormSelect name="class" label="Classe" items={heroClass}  />
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
            Adicionar
          </Button>
      </form>
    </FormProvider>
  );
};

export default HeroCreate;
