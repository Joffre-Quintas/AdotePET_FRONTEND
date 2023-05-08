import { useState } from 'react';
import './RegisterPET.scss';

function registerPET () {
    const [imagePreview, setImagePreview] = useState('')
    const [formValues, setFormValues] = useState({})

    //Carregar o Preview da imagem carregada.
    function handleImagePreview(e) {

        const reader = new FileReader();
        const file = e.target.files[0];
        
        reader.onloadend = () => {
            setImagePreview(reader.result)
            setFormValues((current) => {
                return {
                    ...current,
                    picture: file
                }
            })
        }
        reader.readAsDataURL(file)
    }

    //Envio do form para o backend
    function handleFormValues (e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value

        setFormValues((current) => {
            return {
                ...current,
                [fieldName]: fieldValue
            }
        })
    }

    async function submitForm(e) {
        e.preventDefault()
        const formData = new FormData();
        Object.entries(formValues).forEach(([key,value]) => {
            formData.append(key,value)
        })
        try {
            await fetch('http://localhost:3000/register-pet', {
                method: 'POST',
                body: formData
            })
            console.log('Formulário enviado com sucesso!')   
            } catch (error) {
                console.log(error)
        }  
        console.log(formData)
    }

    return(
        <div className="container">
                <h2>Cadastro PET</h2>
                <p>O PET já está pronto para achar um lar?</p>
                <p>Mostre para todos o melhor angulo.</p>
                <div id='spaceToPicture'>
                    {imagePreview && <img id='previewPicture' src={imagePreview}></img>}
                </div>
            <form className='form_registerPET'>
                <div className='form_registerPET_divInput'>
                    <input type="file" id='picture' name='picture' onChange={handleImagePreview}/>
                </div>
                <div className='form_registerPET_divInput'>
                    <input type="text" name="nameTemp" id="nameTemp" placeholder=" " onChange={handleFormValues}/>
                    <label className='label' htmlFor="nameTemp">Nome Temporário</label>
                </div>
                <div className='form_registerPET_divInput'>
                    <input type="text" name="bristle" id="bristle" placeholder=" " onChange={handleFormValues}/>
                    <label className='label' htmlFor="bristle">Pelagem</label>
                </div>
                <div className='form_registerPET_divInputRadio'>
                    <label className='label'>Estado de Saúde</label>
                    <div>
                        <input type="radio" name="health" id="health" value="saudavel" placeholder=' ' onChange={handleFormValues}/>
                        <label htmlFor="health">Saudável</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="hurt" value="ferido" placeholder=' ' onChange={handleFormValues}/>
                        <label htmlFor="hurt">Ferido</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="deficient" value="deficiente" onChange={handleFormValues}/>
                        <label htmlFor="deficient">Deficiente</label>
                    </div>
                </div>
                <div className='form_registerPET_divInput agePET'>
                    <input type="number" name="ageAprox" id="agePET" placeholder=" " onChange={handleFormValues}/>
                    <label className='label' htmlFor="agePET">Idade Aprox.</label>
                    <p>anos</p>
                </div>
                <div className='form_registerPET_divInputRadio'>
                    <label className='label' htmlFor="size">Porte</label>
                    <div>
                        <input type="radio" name="size" id="sizeSmall" value="pequeno" onChange={handleFormValues}/>
                        <label htmlFor="sizeSmall">Pequeno</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="sizeMedim" value="medio" onChange={handleFormValues}/>
                        <label htmlFor="sizeMedium">Médio</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="sizeBig" value="grande" onChange={handleFormValues}/>
                        <label htmlFor="sizeBig">Grande</label>
                    </div>
                </div>
                <div className='btnSubmit'>
                    <input type="submit" value="Cadastrar" onClick={submitForm}/>
                </div>
            </form>
        </div>
    )
}

export default registerPET;