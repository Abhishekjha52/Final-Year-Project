function SecureButton() {
    async function securefile() {
      // Get the file input element and the selected file
    const inputElement = document.getElementById("fileInput");
    const file = inputElement.files[0];

    // Read the file as an ArrayBuffer
    const fileBuffer = await file.arrayBuffer();

    // Generate a random 256-bit key
    const key = await window.crypto.subtle.generateKey(
      {
        name: "AES-CBC",
        length: 256,
      },
      true,
      ["encrypt", "decrypt"]
    );

    // Get the initialization vector (IV) from the key
    const iv = window.crypto.getRandomValues(new Uint8Array(16));

    // Encrypt the file using AES with 16 rounds of iteration and CBC mode
    const encryptedFile = await window.crypto.subtle.encrypt(
      {
        name: "AES-CBC",
        iv: iv,
        length: 256,
      },
      key,
      fileBuffer
    );

    // Create a new file object from the encrypted file
    const encryptedFileObj = new File([encryptedFile], file.name + ".enc");

    // Download the encrypted file
    const downloadLink = document.createElement("a");
    downloadLink.href = window.URL.createObjectURL(encryptedFileObj);
    downloadLink.download = encryptedFileObj.name;
    downloadLink.click();

    // Decrypt the file using the same key and IV
    const decryptedFile = await window.crypto.subtle.decrypt(
      {
        name: "AES-CBC",
        iv: iv,
        length: 256,
      },
      key,
      encryptedFile
    );

    // Create a new file object from the decrypted file
    const decryptedFileObj = new File([decryptedFile], file.name.replace(".enc", ""));

    // Download the decrypted file
    const downloadLink2 = document.createElement("a");
    downloadLink2.href = window.URL.createObjectURL(decryptedFileObj);
    downloadLink2.download = decryptedFileObj.name;
    downloadLink2.click();
    }
  
    return (
      <div id="secure">
        <h2>Data Encryption</h2><br/>
        <input type="file" id="fileInput" /><br/><br/>
        <button className="secure-button" onClick={securefile}>Secure File</button><br/>
      </div>
    );
  }
  
  export default SecureButton;