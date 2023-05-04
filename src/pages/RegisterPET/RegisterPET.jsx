import { useState } from 'react';
import './RegisterPET.scss';

function registerPET () {
    const [imagePreview, setImagePreview] = useState('')

    function handleImagePreview(e) {

        const reader = new FileReader();
        const file = e.target.files[0];
        
        reader.onloadend = () => {
            setImagePreview(reader.result)
        }
        reader.readAsDataURL(file)
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
                    <input type="file" id='picture' onChange={handleImagePreview}/>
                </div>
                <div className='form_registerPET_divInput'>
                    <input type="text" name="nameTemp" id="nameTemp" placeholder=" "/>
                    <label className='label' htmlFor="nameTemp">Nome Temporário</label>
                </div>
                <div className='form_registerPET_divInput'>
                    <input type="text" name="bristle" id="bristle" placeholder=" "/>
                    <label className='label' htmlFor="bristle">Pelagem</label>
                </div>
                <div className='form_registerPET_divInputRadio'>
                    <label className='label'>Estado de Saúde</label>
                    <div>
                        <input type="radio" name="health" id="health" value="saudavel" placeholder=' ' />
                        <label htmlFor="health">Saudável</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="hurt" value="ferido" placeholder=' '/>
                        <label htmlFor="hurt">Ferido</label>
                    </div>
                    <div>
                        <input type="radio" name="health" id="deficient" value="deficiente" />
                        <label htmlFor="deficient">Deficiente</label>
                    </div>
                </div>
                <div className='form_registerPET_divInput agePET'>
                    <input type="number" name="agePET" id="agePET" placeholder=" "/>
                    <label className='label' htmlFor="agePET">Idade Aprox.</label>
                    <p>anos</p>
                </div>
                <div className='form_registerPET_divInputRadio'>
                    <label className='label' htmlFor="size">Porte</label>
                    <div>
                        <input type="radio" name="size" id="sizeSmall" value="pequeno" />
                        <label htmlFor="sizeSmall">Pequeno</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="sizeMedim" value="medio" />
                        <label htmlFor="sizeMedium">Médio</label>
                    </div>
                    <div>
                        <input type="radio" name="size" id="sizeBig" value="grande" />
                        <label htmlFor="sizeBig">Grande</label>
                    </div>
                </div>
                <div className='btnSubmit'>
                    <input type="submit" value="Cadastrar" />
                </div>
            </form>
        </div>
    )
}

export default registerPET;