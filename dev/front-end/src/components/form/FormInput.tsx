import { ReactElement } from 'react';

import {
  FormControl,
  FormLabel,
  Grid,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightAddon,
  InputRightElement,
  Text,
  Tooltip,
} from '@chakra-ui/react';
import { DeepMap, FieldError, useFormContext } from 'react-hook-form';
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
  const { register, errors: formErrors } = useFormContext();


  const keys = name.split('.');
  let lastObj = formErrors;
  for (const key of keys) {
    if (!lastObj ||!lastObj[key]) {
      lastObj = null as unknown as DeepMap<Record<string, any>, FieldError>;
      break;
    }
    lastObj = lastObj[key];
  }
  const errors = lastObj;



  return (
    <Grid
      gridTemplateColumns={{ base: '1fr', md: `${labelLeft && '200px'} 1fr` }}
      mb={'4'}
    >
      {label && (
        <FormLabel marginBottom={ '2px'} pos="relative" color={colorLabel}>
          {label || 'Label'}{' '}
          {isRequired && (
            <Icon
              as={FaAsterisk}
              className="required-label"
              fontSize="6px"
              verticalAlign="super"
              mx={1}
              color={  'red.300'}
            />
          )}
          {info && (
            <Tooltip label={info} hasArrow placement="right" arrowSize={6} rounded="md">
              <span>
                <Icon
                  as={MdInfoOutline}
                  fontSize=".8rem"
                  color={'whiteAlpha.400'}
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
              color={'whiteAlpha.600'}
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
          <Text
            color="red.400"
            fontSize="sm"
            textAlign="left"
            textColor={"red.800"}
          >
            {errors?.message}
          </Text>
        )}

      </FormControl>

    </Grid>
  );
}
