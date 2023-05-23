import { ReactElement } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightAddon,
  InputRightElement,
  Tooltip,
  useColorMode,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { FaAsterisk } from 'react-icons/fa';
import { IconType } from 'react-icons/lib';
import { MdInfoOutline } from 'react-icons/md';

interface FormInputProps extends InputProps {
  colorLabel?: string;
  label?: string;
  name: string;
  type?: string;
  icon?: IconType;
  labelLeft?: boolean;
  isRequired?: boolean;
  rightLabel?: ReactElement;
  rightAddon?: ReactElement;
  info?: string;
  helperText?: string;
}

export function FormInput({
  colorLabel,
  label,
  name,
  type,
  icon,
  labelLeft,
  isRequired,
  rightLabel,
  rightAddon,
  info,
  helperText,
  ...props
}: FormInputProps) {
  const { colorMode } = useColorMode();
  const { register, errors: formErrors } = useFormContext();

  // lógica para lidar com erros em objetos aninhados. ex: bank.accountNumber
  const keys = name.split('.');
  let lastObj = formErrors;
  for (const key of keys) {
    if (!lastObj[key]) {
      lastObj = null;
      break;
    }
    lastObj = lastObj[key];
  }
  const errors = lastObj;

  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', md: `${labelLeft && '200px'} 1fr` }}
      mb={labelLeft && '4'}
    >
      {label && (
        <FormLabel mb={!labelLeft && '2'} pos="relative" color={colorLabel}>
          {label || 'Label'}{' '}
          {isRequired && (
            <Icon
              as={FaAsterisk}
              className="required-label"
              fontSize="6px"
              verticalAlign="super"
              mx={1}
              color={colorMode === 'light' ? 'red.500' : 'red.300'}
            />
          )}
          {info && (
            <Tooltip label={info} hasArrow placement="right" arrowSize={6} rounded="md">
              <span>
                <Icon
                  as={MdInfoOutline}
                  fontSize=".8rem"
                  color={colorMode === 'light' ? 'gray.400' : 'whiteAlpha.400'}
                  cursor="help"
                />
              </span>
            </Tooltip>
          )}
        </FormLabel>
      )}
      <FormControl>
        <InputGroup>
          {icon && (
            <InputLeftElement
              pointerEvents="none"
              h="100%"
              color={colorMode === 'light' ? 'gray.400' : 'whiteAlpha.600'}
              width={props.size === 'sm' ? '32px' : '40px'}
              height={props.size === 'sm' ? '32px' : '40px'}
            >
              <Icon as={icon} fontSize="18px" />
            </InputLeftElement>
          )}
          <Input
            name={name}
            variant="filled"
            type={type || 'text'}
            placeholder={label}
            ref={register()}
            isInvalid={!!errors}
            data-tour-id={`field_${name}`}
            _focusVisible={{ borderColor: 'primary' }}
            {...props}
          />
          {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
          {rightLabel && <InputRightElement h="100%">{rightLabel}</InputRightElement>}
        </InputGroup>
        {errors && (
          <FormErrorMessage
            _light={{ color: 'red.200' }}
            _dark={{ color: 'red.400' }}
            fontSize="sm"
            textAlign="left"
          >
            {errors.message}
          </FormErrorMessage>
        )}
        {!errors && helperText && (
          <FormHelperText fontSize="smaller" textAlign="left">
            {errors.message}
          </FormHelperText>
        )}
      </FormControl>
    </Grid>
  );
}
