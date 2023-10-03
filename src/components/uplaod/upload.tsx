import styles from './upload.module.scss'
import {useState} from "react";

export const Upload = () => {
    const [files, setFiles] = useState([])
    const [upload,setUpload] = useState({})

    const handlerFilesUpload = (e: any) => {
        const selectedFiles = e.target.files;
        const urls = []
        const test = [...selectedFiles]
        test.forEach(item => {
            console.log(item.size)
            const fileSizeInMegabytes = item.size / (1024 * 1024);
            urls.push({img: URL.createObjectURL(item), size: `${fileSizeInMegabytes.toFixed(2)}мб`})
        })
        const formData = new FormData();
        for (let i = 0; i < test.length; i++) {
            console.log(test[i])
            formData.append('file', test[i]);
        }
        console.log(formData.get('file'))
        setUpload(formData)
        setFiles(urls)
    }
  console.log(upload)
    return <div>
        <h1>Upload is here!</h1>
        <input type="file" id="fileInput" onChange={handlerFilesUpload} className="input-file" accept=".jpg, .jpeg, .png" multiple/>
        <div className={styles.upload}>
            {files.map(el => {
                return <section>
                    <img src={el.img} alt="image"/>
                    <p>{el.size}</p>
                </section>
            })}
        </div>
    </div>
}
