//#region Imports

import { ApiModelProperty } from '@nestjs/swagger';
import { IsDefined, IsEmail, IsString, MaxLength } from 'class-validator';

import { BaseCrudCreatePayload } from '../../../common/base-crud-create.payload';
import { DefaultValidationMessages } from '../../../models/enums/default-validation-messages';

//#endregion

/**
 * A classe que representa o payload enviado para criar um usuário
 */
export class CreateUserPayload extends BaseCrudCreatePayload {

  /**
   * O e-mail do usuário
   */
  @ApiModelProperty()
  @IsDefined({ message: 'É necessário enviar um e-mail.' })
  @MaxLength(255, { message: 'É necessário enviar um e-mail contendo menos de 255 caracteres.' })
  @IsEmail({}, { message: DefaultValidationMessages.IsEmail })
  public email: string;

  /**
   * O nome do usuário
   */
  @ApiModelProperty()
  @IsDefined({ message: 'É necessário enviar um nome.' })
  @IsString({ message: DefaultValidationMessages.IsString })
  public name: string;

  /**
   * A senha do usuário
   */
  @ApiModelProperty()
  @IsDefined({ message: 'É necessário enviar um senha.' })
  @IsString({ message: DefaultValidationMessages.IsString })
  public password: string;

  /**
   * O celular do usuário
   */
  @ApiModelProperty()
  @IsDefined({ message: 'É necessário enviar um celular.' })
  @IsString({ message: DefaultValidationMessages.IsString })
  public cellphone: string;
}
