import React from 'react';
import styles from './../index.less';
import {
  Card,
  Form,
  Input,
  DatePicker,
  Select,
  InputNumber,
  Switch,
  Radio,
  Upload,
  Icon,
  Button,
  Checkbox,
} from 'antd';
import PageHeader from './../../components/organisms/PageHeader';

const FormItem = Form.Item;
const Option = Select.Option;
const RadioGroup = Radio.Group;
const RadioButton = Radio.Button;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;
const Search = Input.Search;

const fieldLabels = {
  nombre: 'Nombre',
  fechaAfiliacion: 'Fecha de Afiliación',
  pais: 'País',
  entidadfederativa: 'Entidad Federativa',
  tipospension: 'Tipos de Pensión',
  edad: 'Edad',
  supervivencia: 'Supervivencia',
  sexo: 'Sexo',
  semanas: 'Semanas Cotizadas Extranjero',
  actanacimiento: 'Acta de Nacimiento',
  email: 'E-mail',
  password: 'Contraseña',
  opciones: 'Opciones',
  observaciones: 'Observaciones',
  seleccionar: 'Seleccionar',
  importe: 'Importe',
  monto: 'Monto',
};

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
    md: { span: 10 },
  },
};

const submitFormLayout = {
  wrapperCol: {
    xs: { span: 24, offset: 0 },
    sm: { span: 10, offset: 7 },
  },
};

const fieldRequiredConfig = {
  rules: [{ required: true, message: 'Dato requerido' }],
};

const AfiliadoCreate = props => {
  const { getFieldDecorator, isFieldTouched, getFieldError, getFieldsError } = props.form;

  const nombreError = isFieldTouched('nombre') && getFieldError('nombre');

  const componentDidMount = () => {
    props.form.validateFields();
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const hasErrors = fieldsError => {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  };

  return (
    <PageHeader
      title="Crear Afiliado"
      content="Forma para registrar el registro de un nuevo Afiliado."
    >
      <div style={{ margin: '24px 24px 0' }}>
        <Card bordered={false}>
          <Form style={{ marginTop: 8 }} onSubmit={handleSubmit}>
            <FormItem {...formItemLayout} label={fieldLabels.nombre} hasFeedback>
              {getFieldDecorator('nombre', fieldRequiredConfig)(
                <Input placeholder="Nombre completo del Afiliado" />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.fechaAfiliacion} hasFeedback>
              {getFieldDecorator('fechaAfiliacion', fieldRequiredConfig)(<DatePicker />)}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.pais}>
              <span className="ant-form-text">México</span>
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.entidadfederativa} hasFeedback>
              {getFieldDecorator('entidadfederativa', fieldRequiredConfig)(
                <Select placeholder="Seleccionar Estado">
                  <Option value="cdmx">Ciudad de México</Option>
                  <Option value="ags">Aguascalientes</Option>
                  <Option value="nln">Nuevo León</Option>
                  <Option value="use">Jalisco</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.tipospension} hasFeedback>
              {getFieldDecorator('tipospension', fieldRequiredConfig)(
                <Select mode="multiple" placeholder="Seleccionar Pensiones">
                  <Option value="ipp">Incapacidad Permanente Parcial</Option>
                  <Option value="ipt">Incapacidad Permanente Total</Option>
                  <Option value="ra">Retiro anticipado</Option>
                </Select>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.edad}>
              {getFieldDecorator('edad', { initialValue: 60 })(<InputNumber min={60} max={100} />)}
              <span className="ant-form-text"> años</span>
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.supervivencia}>
              {getFieldDecorator('supervivencia', {
                valuePropName: 'checked',
                initialValue: false,
              })(<Switch />)}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.semanas}>
              {getFieldDecorator('semanas')(
                <RadioGroup>
                  <Radio value="s">Si</Radio>
                  <Radio value="n">No</Radio>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.sexo}>
              {getFieldDecorator('sexo')(
                <RadioGroup>
                  <RadioButton value="m">Masculino</RadioButton>
                  <RadioButton value="f">Femenino</RadioButton>
                </RadioGroup>
              )}
            </FormItem>

            <FormItem
              {...formItemLayout}
              label={fieldLabels.actanacimiento}
              extra="Acta de Nacimiento Certificada"
              hasFeedback
            >
              {getFieldDecorator('actanacimiento', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload name="logo" action="/upload.do" listType="picture">
                  <Button>
                    <Icon type="upload" /> Clic para anexar
                  </Button>
                </Upload>
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.email} hasFeedback>
              {getFieldDecorator('email', {
                rules: [
                  {
                    type: 'email',
                    message: 'No se ingresó un E-mail válido.',
                  },
                  {
                    required: true,
                    message: 'Ingresa el correo electrónico',
                  },
                ],
              })(<Input />)}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.password} hasFeedback>
              {getFieldDecorator('password', fieldRequiredConfig)(<Input type="password" />)}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.opciones}>
              {getFieldDecorator('opciones', fieldRequiredConfig)(
                <CheckboxGroup options={options} defaultValue={['Pear']} />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.observaciones}>
              {getFieldDecorator('observaciones', fieldRequiredConfig)(
                <TextArea placeholder="Ponga aquí sus observaciones" rows={4} />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.seleccionar}>
              {getFieldDecorator('seleccionar', fieldRequiredConfig)(
                <Search placeholder="input search text" onSearch={value => console.log(value)} />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.importe}>
              {getFieldDecorator('importe', fieldRequiredConfig)(
                <Input addonBefore={<span>$</span>} defaultValue="800" />
              )}
            </FormItem>

            <FormItem {...formItemLayout} label={fieldLabels.monto}>
              {getFieldDecorator('monto', fieldRequiredConfig)(
                <InputNumber
                  defaultValue={1000}
                  formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                  min={0}
                  max={100}
                  style={{ width: 200 }}
                />
              )}
            </FormItem>

            <FormItem wrapperCol={{ span: 12, offset: 5 }}>
              <Button
                type="primary"
                htmlType="submit"
                icon="save"
                disabled={hasErrors(getFieldsError())}
              >
                Enviar
              </Button>
              <a style={{ marginLeft: 8, fontSize: 14 }}>
                <Icon type="arrow-left" />
                Regresar
              </a>
            </FormItem>
          </Form>
        </Card>
      </div>
    </PageHeader>
  );
};

export default Form.create()(AfiliadoCreate);
